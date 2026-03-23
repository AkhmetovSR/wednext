'use client';

import { useCarouselState } from "@/components/Providers/Context"
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SwipeSlide = (activeSlide, setActiveSlide, totalSlides) => {
    const { selectedSlideId, setAutoSlide, setIsSlideOpen, setBb } = useCarouselState();
    const [startTapX, setStartTapX] = useState(0);
    const router = useRouter(); // ← Правильный способ получить router

    const handleTapStart = (e, info) => {
        setStartTapX(info.point.x);
        setAutoSlide(false);
    };
    const handleDragEnd = (event, info) => {
        if (selectedSlideId) return;
        SwipeLoop(info.offset.x, info.velocity.x);
    };

    const handleTap = (e, info, id) => {
        const deltaX = Math.abs(info.point.x - startTapX);
        if (!selectedSlideId && deltaX < 10) {
            router.push(`/${activeSlide + 1}`);
        }
        setAutoSlide(false);
    };

    const goToNextSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let nextSlide = prev + 1;
            setAutoSlide(false);
            return nextSlide >= totalSlides ? 0 : nextSlide;
        });
    };

    const goToPrevSlide = () => {
        if (selectedSlideId) return;
        setActiveSlide(prev => {
            let prevSlide = prev - 1;
            setAutoSlide(false);
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



    const closeSlide = () => {
        setBb(false);
        setIsSlideOpen(false);
    };

    //
    // const handleTap = (e, info, id) => {
    //     console.log('🔴 TAP:', {
    //         pointX: info.point.x,
    //         startTapX,
    //         deltaX: Math.abs(info.point.x - startTapX)
    //     });
    //     // Тап обрабатывается Link в Swipe, здесь только свайпы
    //     setAutoSlide(false);
    // };

    return {
        SwipeLoop,
        handleDragEnd,
        handleTapStart,
        handleTap,
        goToNextSlide,
        goToPrevSlide,
        closeSlide
    };
};