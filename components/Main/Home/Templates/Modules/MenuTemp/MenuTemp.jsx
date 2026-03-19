import {motion} from "framer-motion";
import {useContext} from "react";
import m from "@/components/Main/Home/Templates/Modules/MenuTemp/MenuTemp.module.css";
import {Vibro} from "@/components/Main/Home/Templates/Functions/Vibro";
import {OperationsContext, useCarouselState, useControl, usePageContext, usePositionState, useWeddingData} from "@/components/Providers/Context";


export default function MenuTemp({customClasses, isSlideOpen}) {
    const {paramN, isE, isF} = useControl();
    const {setBuy} = useCarouselState();
    const {weddingData} = useWeddingData();
    const {eventList, wishList} = weddingData;
    const {activePage, changePage} = usePageContext();
    const {setScl, setY1, setY2, setY3, setY4, setSclHome, setOpacityH} = usePositionState();
    const {selectedSlideId} = useCarouselState();
    const {handleSave} = useContext(OperationsContext);
    const handleClick = (id) => {
        console.log("asd")
        console.log(activePage)
        Vibro(5);
        if (selectedSlideId === 4 || selectedSlideId === 3 || selectedSlideId === 6 || selectedSlideId === 11 || selectedSlideId === 7) {
            changePage(id);
        }
        if (selectedSlideId === 2) {
            handlePageChange(id);
        }
        if (selectedSlideId === 5 && id === 'home') {
            setScl(1);
            setY1(0);
            setY2(0)
            setY3(0)
            setY4(0)
            setSclHome(1)
            setOpacityH(1)
            changePage(id);
        }
        if (selectedSlideId === 5 && id === 'event') {
            setScl(1.2);
            setY1(-10);
            setY2(20)
            setY3(80)
            setY4(200)
            setSclHome(1.3)
            setOpacityH(0)
            changePage(id);
        }
        if (selectedSlideId === 5 && id === 'wish') {
            setScl(1.4);
            setY1(-10);
            setY2(50)
            setY3(150)
            setY4(300)
            changePage(id);
        }
        if (selectedSlideId === 5 && id === 'rsvp') {
            changePage(id);
        }
        if (selectedSlideId === 5 && id === 'analytics') {
            changePage(id);
        }
    };
    // Обработчик изменения слайда
    const handlePageChange = (page) => {changePage(page);};
    return (
        <div className={`${m.Menu} ${customClasses?.Menu || ""}`}>
            <motion.div className={activePage === "home" ? `${m.MenuButton} ${m.MenuButtonActive}` : m.MenuButton}
                        onClick={() => handleClick("home")}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
            >
                <div className={m.imgHome}></div>
                <motion.div className={m.BtnNameT}>Ивент</motion.div>
            </motion.div>

            {(eventList?.length > 0 || ((!paramN || isE))) &&
                <motion.div className={activePage === "event" ? `${m.MenuButton} ${m.MenuButtonActive}` : m.MenuButton}
                            onClick={() => handleClick("event")}
                            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                    <div className={m.imgEvent}></div>
                    <motion.div className={m.BtnNameT}>План</motion.div>
                </motion.div>}

            {(wishList?.length > 0 || ((!paramN || isE))) &&
                <motion.div className={activePage === "wish" ? `${m.MenuButton} ${m.MenuButtonActive}` : m.MenuButton}
                            onClick={() => handleClick("wish")}
                            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                    <div className={m.imgInfo}></div>
                    <motion.div className={m.BtnNameT}>Инфо</motion.div>
                </motion.div>}

            <motion.div className={activePage === "rsvp" ? `${m.MenuButton} ${m.MenuButtonActive}` : m.MenuButton}
                        onClick={() => handleClick("rsvp")}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
            >
                <div className={m.imgAnket}></div>
                <motion.div className={m.BtnNameT}>Анкета</motion.div>
            </motion.div>

            {isSlideOpen && !isF && <motion.div className={activePage === "analytics" ? `${m.MenuButton} ${m.MenuButtonActive}` : m.MenuButton}
                            onClick={() => handleClick("analytics")}
                            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                <div className={m.imgAnalyt}></div>
                <motion.div className={m.BtnNameT}>Гости</motion.div>
            </motion.div>
            }

            {isSlideOpen && !paramN && !isE &&
                <div className={m.MenuButton}
                     onClick={() => {
                         setBuy(true)
                     }}
                >
                    <div className={m.imgByu}></div>
                    <motion.div className={m.BtnNameT} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                                animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>Заказать
                    </motion.div>
                </div>}

            {isSlideOpen && isE &&
                <div className={m.MenuButton}
                     onClick={handleSave}
                >
                    <div className={m.imgSave}></div>
                    <motion.div className={m.BtnNameT} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                                animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>Сохранить
                    </motion.div>
                </div>}
        </div>
    );
}