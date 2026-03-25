import main from "@/components/Main/Home/Home.module.css"
import {motion} from "framer-motion";
import {useState, useMemo, useRef} from "react";
import s from "@/components/Main/Home/Templates/Modules/Analytic/Analytic.module.css";
import {useCarouselState, useControl, useWeddingData} from "@/components/Providers/Context";
import AnalyticBtn from "@/components/Main/Home/Templates/Forms/AnalyticBtn";
import UnVisibleBtn from "@/components/Main/Home/Templates/Functions/UnVisibleBtn";
import {initialGuestYes} from "@/initData/initialWedData";
import {initialGuestNot} from "@/initData/initialWedData";
import Attention from "@/components/Main/Home/Templates/Modules/Analytic/Attention";
import DrinkSummary from "@/components/Main/Home/Templates/Modules/Analytic/DrinkSummary";
import GuestList from "@/components/Main/Home/Templates/Modules/Analytic/GuestList";


// Аналитика должна открываться при отсутствии параметра f
export default function Analytics({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const {isE, isF} = useControl();
    const {showAttention, setShowAttention} = useCarouselState();
    const { guestData } = weddingData;
    const safeGuestYes = Array.isArray(guestData.guestYes) && guestData.guestYes.length > 0 ? guestData.guestYes : initialGuestYes;
    const safeGuestNot = Array.isArray(guestData.guestNot) && guestData.guestNot.length > 0 ? guestData.guestNot : initialGuestNot;
    const scrollContainerRef = useRef(null);
    // Унифицированное состояние для всех вкладок
    const [activeTab, setActiveTab] = useState('attending');
    // Общая статистика по напиткам
    const totalDrinks = useMemo(() => {
        return safeGuestYes.reduce((totals, guest) => {
            return {
                vodka: totals.vodka + (parseInt(guest.v) || 0),
                cognac: totals.cognac + (parseInt(guest.k) || 0),
                wine: totals.wine + (parseInt(guest.vn) || 0),
                champagne: totals.champagne + (parseInt(guest.s) || 0)
            };
        }, { vodka: 0, cognac: 0, wine: 0, champagne: 0 });
    }, [safeGuestYes]);
    // Верхний регистр для напитков через запятую, а также подсчет одинаковых напитков
    const wordsWithCount = Array.from(
        safeGuestYes.flatMap(guest =>
            guest.o.split(',').map(w => w.trim()).filter(w => w)
        ).reduce((acc, word) => {
            const normalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            acc.set(normalizedWord, (acc.get(normalizedWord) || 0) + 1);
            return acc;
        }, new Map())
    ).map(([word, count]) => ({ word, count }));

    const renderDrinks = (guest) => {
        if (!guest) return <div>Пока ни один из приглашенных гостей не заполнил анкету.</div>;

        const drinks = [];
        if (guest.v && parseInt(guest.v) > 0) drinks.push("Водка");
        if (guest.k && parseInt(guest.k) > 0) drinks.push("Коньяк");
        if (guest.vn && parseInt(guest.vn) > 0) drinks.push("Вино");
        if (guest.s && parseInt(guest.s) > 0) drinks.push("Шампанское");
        if (guest.o && String(guest.o) !== '') {
            drinks.push(String(guest.o));
        }
        console.log(guest.o)
        return drinks.length > 0
            ? drinks.map((drink, index) => <div key={index}> • {drink}</div>)
            : <div>Не указано</div>;
    };

    return (
        <div className={`${main.HEWRATemp} ${customClasses?.Analytics || ""}`}>
            <motion.div className={`${main.AnalyticFrame} ${customClasses?.AnalyticFrame || ""}`}>
                <motion.div className={`${main.AnalyticTitle} ${customClasses?.AnalyticTitle || ""}`} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>
                    Сведения о гостях
                </motion.div>
                <motion.div className={`${main.EWRAContent} ${customClasses?.EWRAContent || ""}`} ref={scrollContainerRef}>
                    <motion.div className={`${s.Guests} ${customClasses?.Guests || ""}`} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>
                        {activeTab === 'drinks' ? (<DrinkSummary totalDrinks={totalDrinks} wordsWithCount={wordsWithCount} customClasses={customClasses}/>
                        ) : (
                            <GuestList guests={{ safeGuestYes, safeGuestNot }} activeTab={activeTab} renderDrinks={renderDrinks} customClasses={customClasses}/>
                        )}
                    </motion.div>
                </motion.div>
                {showAttention && !isE && !isF && isSlideOpen && (<Attention isSlideOpen={isSlideOpen} onClose={() => setShowAttention(false)}/>)}
                <UnVisibleBtn containerRef={scrollContainerRef}>
                    <AnalyticBtn isSlideOpen={isSlideOpen} activeTab={activeTab} setActiveTab={setActiveTab} attendingCount={safeGuestYes.length} notAttendingCount={safeGuestNot.length} customClasses={customClasses}/>
                </UnVisibleBtn>
            </motion.div>
        </div>
    );
}