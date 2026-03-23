'use client';

import { useCarouselState } from "@/components/Providers/Context"
import { useState } from "react";
import { useRouter } from "next/navigation"; // ← правильный импорт

export const SwipeSlide = (activeSlide, setActiveSlide, totalSlides) => {
    const router = useRouter(); // ← вызываем хук
    const { selectedSlideId, setSlideMove } = useCarouselState();
    const [startTapX, setStartTapX] = useState(0);

    const goToNextSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let nextSlide = prev + 1;
            setSlideMove(false);
            return nextSlide >= totalSlides ? 0 : nextSlide;
        });
    };

    const goToPrevSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let prevSlide = prev - 1;
            setSlideMove(false);
            return prevSlide < 0 ? totalSlides - 1 : prevSlide;
        });
    };

    const SwipeLoop = (offsetX, velocityX) => {
        if (selectedSlideId) return;

        const swipeThreshold = 5;
        const swipePower = Math.abs(offsetX) * velocityX;

        if (swipePower < -swipeThreshold) {
            goToNextSlide();
        } else if (swipePower > swipeThreshold) {
            goToPrevSlide();
        }
    };

    const handleDragEnd = (event, info) => {
        if (selectedSlideId) return;
        SwipeLoop(info.offset.x, info.velocity.x);
    };

    const handleTapStart = (e, info) => {
        setStartTapX(info.point.x);
        setSlideMove(false);
    };

    const handleTap = (e, info) => {
        const deltaX = Math.abs(info.point.x - startTapX);
        if (!selectedSlideId && deltaX < 10) {
            router.push(`/${activeSlide + 1}`); // + 1 потому, что activeSlide на 1 единицу меньше.
        }
        setSlideMove(false);
    };

    return {
        SwipeLoop,
        handleDragEnd,
        handleTapStart,
        handleTap,
        goToNextSlide,
        goToPrevSlide
    };
};