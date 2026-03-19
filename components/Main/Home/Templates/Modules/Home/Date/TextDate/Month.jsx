import React from 'react';
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";

export default function Month({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const {date} = weddingData;
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель",
        "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    return (
        <motion.div
            className={`${s.Month} ${customClasses?.Month || ""}`}
            initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            transition={{ delay: 0.1 }}
        >
            {(date ? (monthNames[date.getMonth()]).toUpperCase() : "Месяц").substring(0, 3)}
        </motion.div>
    );
}