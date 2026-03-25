import { motion } from "framer-motion";
import Day from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Day";
import Month from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Month";
import Year from "@/components/Main/Home/Templates/Modules/Home/Date/TextDate/Year";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";

export default function Date({isSlideOpen, customClasses}) {
    const { openForm } = OpenAddEditForm();
    return (
        <motion.div className={`${s.MDY} ${customClasses?.MDY || ""}`} onClick={() => {openForm('calendar');}}>
            <Month customClasses={customClasses} isSlideOpen={isSlideOpen}/>
            <Day customClasses={customClasses} isSlideOpen={isSlideOpen}/>
            <Year customClasses={customClasses} isSlideOpen={isSlideOpen}/>
        </motion.div>
    );
}