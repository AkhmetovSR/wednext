'use client';
import { motion } from "framer-motion";
import s from "@/components/Swipe/Swipe.module.css";

const Title = ({ children }) => {
    return (
        <motion.div className={s.Main}>
            <div className={s.divTitle}>
                <div className={s.title}>Выбери свое</div>
                <div className={s.title}><h1 className={s.title}><strong>свадебное пригласительное</strong></h1></div>
                <div className={s.title}>и отправь гостям</div>
                <div className={s.shadow}></div>
            </div>
        </motion.div>
    );
};

export default Title;