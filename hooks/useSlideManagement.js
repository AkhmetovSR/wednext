'use client';
import { useEffect } from 'react';

export const useAutoSlide = (autoSlide, selectedSlideId, totalSlides, setActiveSlide, slideDirection) => {
    useEffect(() => {
        if (!autoSlide || selectedSlideId || totalSlides === 0) return;

        const interval = setInterval(() => {
            setActiveSlide(prev => {
                let nextSlide = prev + slideDirection;

                if (nextSlide >= totalSlides) {
                    nextSlide = 0;
                } else if (nextSlide < 0) {
                    nextSlide = totalSlides - 1;
                }

                return nextSlide;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [autoSlide, selectedSlideId, totalSlides, setActiveSlide, slideDirection]);
};