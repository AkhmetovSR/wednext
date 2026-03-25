'use client';

import { useEffect } from 'react';

/**
 * Хук для синхронизации активного слайда с URL параметром slideId
 * @param {string|null} slideId - ID слайда из URL
 * @param {number} totalSlides - общее количество слайдов
 * @param {Function} setSelectedSlideId - функция установки выбранного слайда
 * @param {Function} setBb - функция установки BB
 * @param {Function} setActiveSlide - функция установки активного слайда
 * @param {Function} setAutoSlide - функция установки автопролистывания
 */
export const useSlideSync = (
    slideId,
    totalSlides,
    setSelectedSlideId,
    setBb,
    setActiveSlide,
    setAutoSlide
) => {
    useEffect(() => {
        if (slideId) {
            const id = parseInt(slideId);
            setAutoSlide(false);
            if (!isNaN(id) && id >= 1 && id <= totalSlides) {
                setSelectedSlideId(id);
                setActiveSlide(id - 1);
            }
        } else {
            setSelectedSlideId(null);
            setBb(false);
        }
    }, [slideId, totalSlides, setSelectedSlideId, setBb, setActiveSlide, setAutoSlide]);
};