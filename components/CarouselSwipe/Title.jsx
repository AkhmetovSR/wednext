'use client';
import { motion } from "framer-motion";
import s from "@/components/CarouselSwipe/Title.module.css";

export default function Title(){
    return (
        <motion.div className={s.divTitle}>
                <div className={s.title}>Выбери свое</div>
                <div className={s.title}><h1 className={s.titleh1}><strong>свадебное пригласительное</strong></h1></div>
                <div className={s.title}>и отправь гостям</div>
        </motion.div>
    );
};