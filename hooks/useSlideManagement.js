'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation'; // изменены импорты

export const useSlideManagement = (totalSlides, setSelectedSlideId, setActiveSlide, setBb) => {
    const params = useParams(); // изменен способ получения params
    const slideId = params?.slideId; // получение slideId
    const router = useRouter(); // useNavigate → useRouter

    useEffect(() => {
        if (slideId) {
            const id = parseInt(slideId);
            if (!isNaN(id) && id >= 1 && id <= totalSlides) {
                setSelectedSlideId(id);
                setActiveSlide(id - 1);
            }
        } else {
            setSelectedSlideId(null);
            setBb(false);
        }
    }, [slideId, totalSlides, setSelectedSlideId, setBb, setActiveSlide]);

    // Если нужно использовать router где-то еще
    return { router };
};

export const useAutoSlide = (slideMove, selectedSlideId, totalSlides, setActiveSlide, slideDirection) => {
    useEffect(() => {
        if (!slideMove || selectedSlideId || totalSlides === 0) return;

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
    }, [slideMove, selectedSlideId, totalSlides, setActiveSlide, slideDirection]);
};