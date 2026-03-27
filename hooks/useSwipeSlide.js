'use client';

import { useCarouselState } from "@/components/Providers/Context";
import {useSwipeable} from "react-swipeable";

export const useSwipeSlide = (activeSlide, setActiveSlide, totalSlides) => {
    const { selectedSlideId, setAutoSlide, setIsSlideOpen, setBb } = useCarouselState();

    // Переключение на следующий слайд
    const goToNextSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let nextSlide = prev + 1;
            setAutoSlide(false);
            return nextSlide >= totalSlides ? 0 : nextSlide;
        });
    };
    // Переключение на предыдущий слайд
    const goToPrevSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let prevSlide = prev - 1;
            setAutoSlide(false);
            return prevSlide < 0 ? totalSlides - 1 : prevSlide;
        });
    };
    // Обработчики свайпов через useSwipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: goToNextSlide,
        onSwipedRight: goToPrevSlide,
        delta: 5,
        preventDefaultTouchmoveEvent: true
    });

    // Закрытие слайда
    const closeSlide = () => {
        setBb(false);
        setIsSlideOpen(false);
    };

    return {
        closeSlide,
        goToNextSlide,
        goToPrevSlide,
        swipeHandlers
    };
};