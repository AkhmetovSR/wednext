'use client';

import { useCarouselState } from "@/components/Providers/Context";
import { useState, useRef } from "react";

export const SwipeSlide = (activeSlide, setActiveSlide, totalSlides) => {
    const { selectedSlideId, setAutoSlide, setIsSlideOpen, setBb } = useCarouselState();

    const [startTapX, setStartTapX] = useState(0);
    const [shouldIgnoreTap, setShouldIgnoreTap] = useState(false);
    const linkRef = useRef(null);

    // Обработчик начала тапа
    const handleTapStart = (e, info) => {
        setStartTapX(info.point.x);
        setShouldIgnoreTap(false);
        setAutoSlide(false);
    };

    // Обработчик завершения тапа
    const handleTap = (e, info) => {
        const deltaX = Math.abs(info.point.x - startTapX);

        // Если это был свайп (движение больше 10px), игнорируем
        if (deltaX > 10) {
            setShouldIgnoreTap(true);
            return;
        }

        // Если уже игнорируем, не делаем ничего
        if (shouldIgnoreTap) {
            return;
        }

        // Если нет открытого слайда, кликаем по Link
        if (!selectedSlideId && linkRef.current) {
            linkRef.current.click();
        }
    };

    // Обработчик начала drag
    const handleDragStart = () => {
        setShouldIgnoreTap(true);
    };

    // Обработчик окончания drag
    const handleDragEnd = (event, info) => {
        if (selectedSlideId) return;
        SwipeLoop(info.offset.x, info.velocity.x);
    };

    // Логика свайпа
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

    // Закрытие слайда
    const closeSlide = () => {
        setBb(false);
        setIsSlideOpen(false);
    };

    // Установка ref на Link
    const setLinkRef = (ref) => {
        linkRef.current = ref;
    };

    return {
        // Обработчики событий
        handleTapStart,
        handleTap,
        handleDragStart,
        handleDragEnd,
        // Ref для Link
        setLinkRef,
        // Дополнительные функции
        closeSlide,
        goToNextSlide,
        goToPrevSlide
    };
};