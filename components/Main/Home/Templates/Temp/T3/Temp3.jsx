'use client';
import m from "@/components/Main/Home/Home.module.css";
import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import HomeT3 from "@/components/Main/Home/Templates/Temp/T3/HomeT3";
import {motion} from "framer-motion";
import FireFly from "@/components/Main/Home/Templates/Functions/FireFly";
import {usePageContext} from "@/components/Providers/Context";
import { useParams } from "next/navigation";
import EventList from "@/components/Main/Home/Templates/Modules/Event/EventList";
import {cstmAnalytic, cstmEvent, cstmHome, cstmMenu, cstmRSVP, cstmTemp, cstmWish} from "@/components/Main/Home/Templates/cstmStyle";
import WishList from "../../Modules/Wish/WishList";
import RSVP from "@/components/Main/Home/Templates/Modules/RVSP/RSVP";
import Analytics from "@/components/Main/Home/Templates/Modules/Analytic/Analytics";
import MenuTemp from "@/components/Main/Home/Templates/Modules/MenuTemp/MenuTemp";

export default function Temp3() {
    const {activePage} = usePageContext();
    const customClasses = cstmTemp(s);
    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL

    return (
        <motion.div className={`${m.Main} ${customClasses?.Main || ""}`}>
            <div className={s.BG}></div>
            <div className={m.Content}>
                {activePage === 'home' && (<HomeT3 customClasses={cstmHome(s)}/>)}
                {activePage === 'event' && (<EventList customClasses={cstmEvent(s)}/>)}
                {activePage === 'wish' && (<WishList customClasses={cstmWish(s)}/>)}
                {activePage === 'rsvp' && (<RSVP customClasses={cstmRSVP(s)}/>)}
                {activePage === 'analytics' && (<Analytics customClasses={cstmAnalytic(s)}/>)}
            </div>
            <div className={m.Menu}>
                <MenuTemp customClasses={cstmMenu(s)}></MenuTemp>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
                {isSlideOpen && <FireFly/>}
            </motion.div>
        </motion.div>
    )
        ;
}