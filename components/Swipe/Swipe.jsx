'use client';

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import Link from "next/link";
import s from "@/components/Swipe/Swipe.module.css";
import { useCarouselState } from "@/components/Providers/Context";
import CarouselNavigation from "@/components/Carousel/CarouselNavigation";
import { SwipeSlide } from "@/hooks/useSwipeSlide";
import { useAutoSlide } from "@/hooks/useSlideManagement";
import Title from "@/components/Swipe/Title";

const Swipe = ({ children }) => {
    const { setBb, selectedSlideId, setSelectedSlideId, activeSlide, setActiveSlide, autoSlide, setAutoSlide } = useCarouselState();
    const params = useParams();
    const slideId = params?.slideId;
    const totalSlides = React.Children.count(children);
    const swipeAreaRef = useRef(null);
    const linkRef = useRef(null);
    const router = useRouter();

    // Состояния для анимации фона
    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.61)');
    const dragTimeoutRef = useRef(null);
    const clickTimeoutRef = useRef(null);
    const [startTapX, setStartTapX] = useState(0);
    const [shouldIgnoreTap, setShouldIgnoreTap] = useState(false);

    // Функция сброса цвета
    const resetBgColor = () => {
        setBgColor('rgba(255, 255, 255, 0.61)');
    };

    // Предзагрузка слайдов
    useEffect(() => {
        if (router && totalSlides) {
            for (let i = 1; i <= totalSlides; i++) {
                router.prefetch(`/${i}`);
            }
        }
    }, [totalSlides, router]);

    // Автопролистывание
    useAutoSlide(autoSlide, selectedSlideId, totalSlides, setActiveSlide, 1);

    // Свайпы
    const { handleTapStart: originalHandleTapStart, handleDragEnd } = SwipeSlide(activeSlide, setActiveSlide, totalSlides);

    // Очистка таймеров при размонтировании
    useEffect(() => {
        return () => {
            if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
            if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        };
    }, []);

    // Обработчик начала тапа (для определения свайпа)
    const handleTapStart = (e, info) => {
        console.log('🔵 TAP START');
        setStartTapX(info.point.x);
        setShouldIgnoreTap(false);

        // Очищаем таймеры
        if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

        originalHandleTapStart(e, info);
    };

    // Обработчик завершения тапа (для анимации и клика)
    const handleTap = (e, info) => {
        const deltaX = Math.abs(info.point.x - startTapX);
        console.log('👆 TAP END', { deltaX });

        // Если это был свайп (движение больше 10px), игнорируем
        if (deltaX > 10) {
            console.log('🚫 Was swipe, ignoring tap');
            setShouldIgnoreTap(true);
            return;
        }

        // Если уже игнорируем, не делаем ничего
        if (shouldIgnoreTap) {
            console.log('🚫 Tap ignored');
            return;
        }

        // Если нет открытого слайда, меняем цвет на зеленый и кликаем по Link
        if (!selectedSlideId) {
            console.log('✅ Valid tap - opening slide');

            // Меняем фон на зеленый
            setBgColor('rgba(34, 197, 94, 0.3)');

            // Сбрасываем фон через 200мс
            if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
            clickTimeoutRef.current = setTimeout(() => {
                resetBgColor();
            }, 200);

            // Имитируем клик по Link
            if (linkRef.current) {
                linkRef.current.click();
            }
        }
    };

    // Обработчик начала drag (красный цвет)
    const handleDragStart = () => {
        console.log('🟢 DRAG START');

        // Очищаем таймеры
        if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

        // Меняем фон на красный
        setBgColor('rgba(239, 68, 68, 0.4)');
        setShouldIgnoreTap(true);
    };

    // Обработчик окончания drag
    const handleDragEndWrapper = (event, info) => {
        console.log('🔴 DRAG END');

        // Очищаем предыдущий таймер
        if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);

        // Сбрасываем фон через 300мс
        dragTimeoutRef.current = setTimeout(() => {
            resetBgColor();
        }, 300);

        // Вызываем оригинальный обработчик свайпа
        handleDragEnd(event, info);
    };

    // Синхронизация активного слайда с URL
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

    const getSlidePosition = (index) => {
        let position = index - activeSlide;
        if (totalSlides > 3) {
            if (position > Math.floor(totalSlides / 2)) {
                position = position - totalSlides;
            } else if (position < -Math.floor(totalSlides / 2)) {
                position = position + totalSlides;
            }
        }
        return position;
    };

    // Исчезновение карусели
    if (slideId) return null;

    return (
        <motion.div className={s.Main}>
            <Title activeSlide={activeSlide} />

            <div className={s.carousel}>
                <Link
                    ref={linkRef}
                    href={`/${activeSlide + 1}`}
                    prefetch
                    className={s.Link}
                >
                    <motion.div
                        className={s.Sw}
                        ref={swipeAreaRef}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEndWrapper}
                        onTapStart={handleTapStart}
                        onTap={handleTap}
                        style={{
                            backgroundColor: bgColor,
                            transition: 'background-color 0.15s ease',
                            cursor: 'pointer'
                        }}
                    >
                        <div className={s.info}>
                            <span>Открыть слайд {activeSlide + 1}</span>
                            <span className={s.arrow}>→</span>
                        </div>
                    </motion.div>
                    {React.Children.map(children, (child, index) => {
                        const id = child.props["data-id"];
                        const position = getSlidePosition(index);
                        const isActive = index === activeSlide;
                        if (Math.abs(position) > 1) return null;

                        return (
                            <motion.div
                                key={id}
                                className={`${s.CardCont} ${isActive ? s.activeCard : ''}`}
                                style={{
                                    zIndex: totalSlides - Math.abs(position),
                                    pointerEvents: 'none',
                                }}
                                layoutId={`slide-${id}`}
                                initial={false}
                                animate={{
                                    opacity: 1,
                                    x: position * 130,
                                    scale: Math.max(0.7, 1 - Math.abs(position) * 0.5),
                                    rotateY: position * -30,
                                    z: Math.abs(position) * -120,
                                    filter: `blur(${Math.abs(position) * 2}px)`
                                }}
                                transition={{ duration: 0.3, ease: "easeOut", type: "tween" }}
                            >
                                {!selectedSlideId && isActive && (
                                    <div className={s.Watch}>
                                        <div className={s.Eye}></div>
                                        <div className={s.See}>Посмотреть</div>
                                    </div>
                                )}
                                {child}
                            </motion.div>
                        );
                    })}
                </Link>
            </div>

            {!selectedSlideId && (
                <motion.div className={s.divNavi}>
                    <div className={s.navi}>
                        <CarouselNavigation />
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Swipe;