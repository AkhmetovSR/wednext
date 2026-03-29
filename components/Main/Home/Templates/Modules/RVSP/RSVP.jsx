import s from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";
import m from "@/components/Main/MainStyle.module.css";
import rvsp from "@/utils/api/rvsp";
import CookieManager from "@/components/Main/Home/Templates/Functions/CookieManager";
import {useControl, useOperations, usePolicyState} from "@/components/Providers/Context";
import YesOrNotBtn from "@/components/Main/Home/Templates/Modules/RVSP/YesOrNotBtn/YesOrNotBtn";
import Confirmed from "@/components/Main/Home/Templates/Modules/RVSP/Confirmed/Confirmed";
import AlcoPrefer from "@/components/Main/Home/Templates/Modules/RVSP/AlcoPrefer/AlcoPrefer";
import InputFIO from "@/components/Main/Home/Templates/Modules/RVSP/Input/InputFIO";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

export default function RSVP({customClasses}) {
    const { setIsLoading, setErr } = useOperations();
    const { cookieAccepted,  setShowCookieBanner } = usePolicyState();
    // const [selectedOption, setSelectedOption] = useState("1");
    // Данные по количеству взрослых и детей
    // const [adultsCount, setAdultsCount] = useState(0);
    // const [childrenCount, setChildrenCount] = useState(0);
    // const handleOptionChange = (value) => {
    //     setAdultsCount(0);
    //     setChildrenCount(0);
    //     setSelectedOption(value);
    // };
    // const {setErr} = useErrorState();
    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    const {paramN, isE} = useControl();
    // Состояния ошибок при валидации ФИО гостя
    const [nameError, setNameError] = useState(false);
    //Состояние кнопок - приду или нет на свадьбу
    const [yesOrNot, setYesOrNot] = useState(true);
    //Получаем данные из поля ФИО
    const [FIO, setFIO] = useState("");
    //Получаем данные и input, при выборе напитка "Другое"
    const [otherDrink, setOtherDrink] = useState("");
    //Получаем параметры URL
    // Куки, если пользователь уже отправлял форму, то показываем другое окно
    const cookId = CookieManager.get("id");
    const [cooId, setCooId] = useState(cookId);
    // Состояние для отслеживания ожидания подтверждения cookie
    const [waitingForCookie, setWaitingForCookie] = useState(false);
    // Изменение стэйтов выше при нажатии на кнопку "Изменить решение", для смены окон
    const changeConfirm = () => {
        setCooId(null);
    }
    // Состояния выбора напитков boolean
    const [alcoStates, setAlcoStates] = useState({
        1: false, // водка
        2: false, // коньяк
        3: false, // вино
        4: false, // шампанское
        5: false, // другое (при выборе появляется инпут для ввода своего варианта)
    });
    // Функция изменения состояния кнопок напитков, для изменения их фона (например нажал на кнопку, чтобы понимать что было выбрано - она подсвечивается)
    const handleDrinkSelect = (id) => {
        setAlcoStates(prev => ({...prev, [id]: !prev[id]}));
    };

    // Функция для продолжения отправки после принятия cookie
    const proceedWithSubmission = () => {
        const nameValid = FIO.length >= 1 && FIO.length <= 60;
        if (!nameValid) {
            setNameError(true);
            return;
        }
        if (isE) return;

        // Формирование данных для отправки
        const prepareData = {
            paramN,
            guest: FIO,
            yesOrNot,
            v: alcoStates[1],
            k: alcoStates[2],
            vn: alcoStates[3],
            s: alcoStates[4],
            o: otherDrink,
            ...(cookId && {cookId: cookId})
        };

        console.log(prepareData);

        if (paramN && !cookId) {
            setIsLoading(true);
            rvsp.guestConfirm(prepareData, setCooId, setErr, setIsLoading);
            setCooId(CookieManager.get("id"));
        }
        if (paramN && cookId) {
            setIsLoading(true);
            rvsp.updateGuestConfirm(prepareData, setCooId, cookId, setErr, setIsLoading);
        }
    };
    // Отслеживаем изменение cookieAccepted, когда пользователь принял политику
    useEffect(() => {
        if (waitingForCookie && cookieAccepted) {
            // Пользователь принял cookie, продолжаем выполнение
            setWaitingForCookie(false);
            proceedWithSubmission();
        }
    }, [setWaitingForCookie, cookieAccepted, waitingForCookie]);
    // Основная функция отправки
    function addGuest() {
        if (!cookieAccepted) {
            // Показываем баннер и ждем подтверждения
            setShowCookieBanner(true);
            setWaitingForCookie(true);
            return;
        }

        // Если cookie уже приняты, продолжаем сразу
        proceedWithSubmission();
    }
    // const [addGuset, setAddGuset] = useState(false);
    return (
        <motion.div className={`${m.HEWRATemp} ${customClasses?.HEWRATemp || ""}`}>
            <motion.div className={`${m.RSVPFrame} ${customClasses?.RSVPFrame || ""}`}>
                <motion.div className={`${m.RVSPTitle} ${customClasses?.RVSPTitle || ""} ${isSlideOpen ? m.open : m.closed}`}>Анкета гостя</motion.div>
                <motion.div className={`${m.EWRAContent} ${customClasses?.EWRAContent || ""}`}>

                    <motion.div className={`${s.RSVP} ${customClasses?.RSVP || ""}`}>
                        {!cooId && <InputFIO isSlideOpen={isSlideOpen} FIO={FIO} setFIO={setFIO} nameError={nameError} setNameError={setNameError}/>}
                        {!cooId && <YesOrNotBtn isSlideOpen={isSlideOpen} customClasses={customClasses} yesOrNot={yesOrNot} setYesOrNot={setYesOrNot}/>}
                        {!cooId && yesOrNot &&<AlcoPrefer customClasses={customClasses} alcoStates={alcoStates} handleClick={handleDrinkSelect} setOtherDrink={setOtherDrink} otherDrink={otherDrink} isSlideOpen={isSlideOpen}/>}
                        {!cooId && !yesOrNot &&<motion.div className={s.Regret} initial={{scale: 0.9}} animate={{scale: 1}}>Сожалеем, что Вы не сможете прийти. Если у Вас изменятся планы, вы всегда сможете изменить решение.</motion.div>}
                        {!cooId && <motion.button className={`${s.BtnConfirm} ${customClasses?.BtnConfirm || ""}`} onClick={addGuest} initial={{scale: isSlideOpen ? 1 : 0.8}} animate={{scale: isSlideOpen ? 1 : 0.8}}>Готово</motion.button>}
                        {cooId && <Confirmed changeConfirm={changeConfirm}/>}
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// import AllOrIam from "./RadioBtn/AllOrIam";
// import All from "./All/All";
// import WithMe from "./WithMe/WithMe";
// import AddGuestForm from "./AddGuestForm/AddGuestForm";

{/*{!cooId && yesOrNot === '1' &&<WithMe isSlideOpen={isSlideOpen} setAddGuset={setAddGuset}/>}*/}
{/*{addGuset && <AddGuestForm setAddGuset={setAddGuset}*/}
{/*                                             setNameError={setNameError} FIO={FIO}*/}
{/*                                             setFio={setFio} alcoStates={alcoStates}*/}
{/*                                             handleClick={handleDrinkSelect}*/}
{/*                                             setOtherDrink={setOtherDrink} otherDrink={otherDrink}*/}
{/*                                             isSlideOpen={isSlideOpen} adultsCount={adultsCount}*/}
{/*                                             childrenCount={childrenCount}*/}
{/*                                             setAdultsCount={setAdultsCount} setChildrenCount={setChildrenCount}*/}
{/*/>}*/}