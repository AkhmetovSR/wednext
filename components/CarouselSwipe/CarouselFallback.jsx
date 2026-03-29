'use client';

import { motion } from 'framer-motion';
import s from './CarouselFallback.module.css';

export const CarouselFallback = ({ onRetry, isRetrying, failedCount }) => {
    return (
        <motion.div
            className={s.fallbackContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className={s.fallbackContent}>
                <div className={s.fallbackIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 4v4M12 12h.01M12 16h.01M12 20h.01M4 4l16 16M20 4L4 20" strokeLinecap="round" />
                    </svg>
                </div>

                <h3 className={s.fallbackTitle}>
                    Не удалось загрузить шаблоны
                </h3>

                <p className={s.fallbackMessage}>
                    {failedCount > 0
                        ? `Не удалось загрузить ${failedCount} шаблонов. Попробуйте снова.`
                        : 'Произошла ошибка при загрузке шаблонов.'}
                </p>

                <button
                    className={s.retryButton}
                    onClick={onRetry}
                    disabled={isRetrying}
                >
                    {isRetrying ? (
                        <>
                            <span className={s.spinner} />
                            Загрузка...
                        </>
                    ) : (
                        <>
                            <span className={s.retryIcon}>⟳</span>
                            Загрузить шаблоны
                        </>
                    )}
                </button>

                <p className={s.fallbackHint}>
                    Проверьте подключение к интернету и попробуйте снова
                </p>
            </div>
        </motion.div>
    );
};