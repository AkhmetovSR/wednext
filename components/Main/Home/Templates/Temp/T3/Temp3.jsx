import m from "@/components/Main/Home/Home.module.css";
import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import HomeT3 from "@/components/Main/Home/Templates/Temp/T3/HomeT3";
import {motion} from "framer-motion";
import FireFly from "@/components/Main/Home/Templates/Functions/FireFly";
import {useCarouselState, useOperations, usePageContext} from "@/components/Providers/Context";
import {useState} from "react";
import { useParams } from "next/navigation";
import EventList from "@/components/Main/Home/Templates/Modules/Event/EventList";
import {cstmAnalytic, cstmEvent, cstmHome, cstmMenu, cstmRSVP, cstmTemp, cstmWish} from "@/components/Main/Home/Templates/cstmStyle";
import WishList from "../../Modules/Wish/WishList";
import RSVP from "@/components/Main/Home/Templates/Modules/RVSP/RSVP";
import Analytics from "@/components/Main/Home/Templates/Modules/Analytic/Analytics";
import MenuTemp from "@/components/Main/Home/Templates/Modules/MenuTemp/MenuTemp";

export default function Temp3() {
    const {activePage} = usePageContext();
    const {selectedSlideId} = useCarouselState();
    const {slideId} = useParams();
    const {handleSave} = useOperations();
    const [isSlideOpen, setIsSlideOpen] = useState(Number(selectedSlideId) === Number(slideId));
    const customClasses = cstmTemp(s);
    return (
        <motion.div className={`${m.Main} ${customClasses?.Main || ""}`}>
            <div className={s.BG}></div>
            <div className={m.Content}>
                {/*{activePage === 'home' && (<motion.div key="home"><HomeT3 isSlideOpen={isSlideOpen}/></motion.div>)}*/}
                {activePage === 'home' && (<HomeT3 customClasses={cstmHome(s)} isSlideOpen={isSlideOpen}/>)}
                {activePage === 'event' && (<EventList customClasses={cstmEvent(s)} isSlideOpen={isSlideOpen}/>)}
                {activePage === 'wish' && (<WishList customClasses={cstmWish(s)} isSlideOpen={isSlideOpen}/>)}
                {activePage === 'rsvp' && (<RSVP customClasses={cstmRSVP(s)} isSlideOpen={isSlideOpen}/>)}
                {activePage === 'analytics' && (<Analytics customClasses={cstmAnalytic(s)} isSlideOpen={isSlideOpen}/>)}
            </div>
            <div className={m.Menu}>
                <MenuTemp isSlideOpen={isSlideOpen} customClasses={cstmMenu}></MenuTemp>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
                {isSlideOpen && <FireFly isSlideOpen={isSlideOpen}/>}
            </motion.div>
        </motion.div>
    )
        ;
}