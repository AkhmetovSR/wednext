'use client';
import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useCalculateFontSize} from "@/components/Main/Home/Templates/Functions/ChangeName";
import WifeAndMan from "@/components/Main/Home/Templates/Modules/Home/WM/WifeAndMan";
import Month from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Month";
import Day from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Day";
import Year from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Year";
import DayTitle from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/DayTitle";
import Invite from "@/components/Main/Home/Templates/Modules/Home/Invite/Invite";
import Intro from "@/components/Main/Home/Templates/Modules/Home/Intro/Intro";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";

export default function HomeT3({customClasses}) {
    const coefficient = useCalculateFontSize();
    const { openForm } = OpenAddEditForm();
    return (
        <motion.div className={s.HomeT3}>
            <motion.div className={s.divIntro}><Intro customClasses={customClasses}/></motion.div>
            <motion.div className={`${s.divWM} divWM`}>
                <WifeAndMan customClasses={customClasses} coefficient={coefficient}/>
            </motion.div>
            <motion.div className={s.divInvite}><Invite customClasses={customClasses}/></motion.div>
            <motion.div className={s.divDate}>
                <motion.div className={s.MDY} onClick={() => {openForm('calendar');}}>
                    <div className={s.M}><Month customClasses={customClasses}/></div>
                    <div className={s.D}><Day customClasses={customClasses}/></div>
                    <div className={s.Y}><Year customClasses={customClasses}/></div>
                </motion.div>
                <motion.div className={s.dayTitle} onClick={() => {openForm('calendar');}}>
                    <DayTitle customClasses={customClasses}/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}