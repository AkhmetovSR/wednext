'use client';

import { motion } from "framer-motion";
import s from "./Loader.module.css";

const Loader = () => {
    return (
        <motion.div
            className={s.loaderOverlay}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className={s.loaderContainer}>
                {/* Анимированные круги */}
                <div className={s.circles}>
                    <div className={s.circle1}></div>
                    <div className={s.circle2}></div>
                    <div className={s.circle3}></div>
                </div>

                {/* Текст загрузки */}
                <div className={s.loaderText}>
                    <span>З</span>
                    <span>а</span>
                    <span>г</span>
                    <span>р</span>
                    <span>у</span>
                    <span>з</span>
                    <span>к</span>
                    <span>а</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;