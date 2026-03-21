'use client';

import { useCarouselState } from "@/components/Providers/Context"
import { useState } from "react";
import {useRouter} from "next/navigation";

export const SwipeSlide = (activeSlide, setActiveSlide, totalSlides) => {
    const router = useRouter(); // ← вызываем хук внутри функции
    const { selectedSlideId, setSlideMove, setIsSlideOpen, setBb } = useCarouselState();
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

    const handleTap = (e, info, id) => {
        const deltaX = Math.abs(info.point.x - startTapX);
        const openSlide = (id) => {
            router.push(`/${id}`); // навигация на страницу слайда
        };
        if (!selectedSlideId && deltaX < 10) {
            openSlide(id + 1);
            setIsSlideOpen(true);
        }
        setSlideMove(false);
    };

    const closeSlide = () => {
        setBb(false);
        // Возврат на предыдущую страницу
        router.push(`/`);
        setIsSlideOpen(false);
    };

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

// import { useNavigate } from 'react-router-dom';
// import { useCarouselState } from "../../../../../Context.js"
// import {useState} from "react";
//
// export const SwipeSlide = (activeSlide, setActiveSlide, totalSlides, openSlide) => {
//     const { selectedSlideId, setSlideMove } = useCarouselState();
//     const [startTapX, setStartTapX] = useState(0);
//
//     const SwipeLoop = (offsetX, velocityX) => {
//         if (selectedSlideId) return;
//
//         const swipeThreshold = 5;
//         const swipePower = Math.abs(offsetX) * velocityX;
//
//         if (swipePower < -swipeThreshold) {
//             // СВАЙП ВЛЕВО - СЛЕДУЮЩИЙ СЛАЙД
//             setActiveSlide(prev => {
//                 let nextSlide = prev + 1; // Увеличиваем индекс
//                 // Если вышли за пределы - переходим к первому слайду
//                 return nextSlide >= totalSlides ? 0 : nextSlide;
//             });
//         } else if (swipePower > swipeThreshold) {
//             // СВАЙП ВПРАВО - ПРЕДЫДУЩИЙ СЛАЙД
//             setActiveSlide(prev => {
//                 let prevSlide = prev - 1; // Уменьшаем индекс
//                 // Если ушли ниже нуля - переходим к последнему слайду
//                 return prevSlide < 0 ? totalSlides - 1 : prevSlide;
//             });
//         }
//     };
//
//     const handleDragEnd = (event, info) => {
//         if (selectedSlideId) return;
//         SwipeLoop(info.offset.x, info.velocity.x);
//     };
//
//     const handleTapStart = (e, info) => {
//         setStartTapX(info.point.x);
//         setSlideMove(false);
//         // setAutoSlide(false);
//     };
//
//     const handleTap = (e, info, id) => {
//         const deltaX = Math.abs(info.point.x - startTapX);
//         // Убрали вызов openSlide здесь, так как он теперь обрабатывается в основном компоненте
//         if (!selectedSlideId && deltaX < 10) {
//             // openSlide(id); // Закомментировать или удалить эту строку
//         }
//         setSlideMove(false);
//     };
//
//     return {
//         SwipeLoop,
//         handleDragEnd,
//         handleTapStart,
//         handleTap
//     };
// };