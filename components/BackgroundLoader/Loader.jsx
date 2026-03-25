'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import s from "./Loader.module.css";

export const Loader = ({ children, slideId, isActive }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        // Если слайд активен и еще не загружен, показываем загрузку
        if (isActive && !hasLoaded) {
            setIsLoading(true);

            // Имитация загрузки (в реальности можно ждать загрузки изображений)
            const timer = setTimeout(() => {
                setIsLoading(false);
                setHasLoaded(true);
            }, 400); // Небольшая задержка для плавности

            return () => clearTimeout(timer);
        }

        // Если слайд неактивен, но уже загружен - не показываем загрузку при повторном показе
        if (!isActive && hasLoaded) {
            setIsLoading(false);
        }
    }, [isActive, hasLoaded]);

    return (
        <div className={s.slideWrapper}>
            <AnimatePresence>
                {isLoading && isActive && (
                    <motion.div
                        className={s.loaderOverlay}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={s.loaderContent}>
                            {/* Анимированные круги вместо SVG */}
                            <div className={s.circles}>
                                <div className={s.circle1} />
                                <div className={s.circle2} />
                                <div className={s.circle3} />
                            </div>

                            {/* Прогресс бар */}
                            <div className={s.progressBar}>
                                <div className={s.progressFill} />
                            </div>

                            {/* Текст */}
                            <div className={s.loaderText}>
                                <span>Загрузка</span>
                                <span className={s.dots}>
                                    <span>.</span><span>.</span><span>.</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={s.content}
                style={{
                    opacity: isLoading && isActive ? 0 : 1,
                    transition: 'opacity 0.3s ease'
                }}
            >
                {children}
            </div>
        </div>
    );
};