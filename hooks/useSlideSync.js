'use client';

import { useEffect } from 'react';

/**
 * Хук для синхронизации активного слайда с URL параметром slideId
 * @param {string|null} slideId - ID слайда из URL
 * @param {number} totalSlides - общее количество слайдов
 * @param {Function} setBb - функция установки BB
 * @param {Function} setActiveSlide - функция установки активного слайда
 * @param {Function} setAutoSlide - функция установки автопролистывания
 */
export const useSlideSync = (slideId, totalSlides, setBb, setActiveSlide, setAutoSlide) => {
    useEffect(() => {
        if (slideId) {
            const id = parseInt(slideId);
            setAutoSlide(false);
            if (!isNaN(id) && id >= 1 && id <= totalSlides) {
                setActiveSlide(id + 1);
            }
        } else {
            setBb(false);
        }
    }, [slideId, totalSlides, setBb, setActiveSlide, setAutoSlide]);
};