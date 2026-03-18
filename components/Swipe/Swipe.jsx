'use client';

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useParams } from 'next/navigation'; // изменен импорт
import s from "./Swipe.module.css";
import { useCarouselState, useControl } from "@/components/Providers/Context";
import CarouselNavigation from "@/components/Carousel/CarouselNavigation";
import { useSlideNavigation } from "@/hooks/useOpenSlide";
import { SwipeSlide } from "@/hooks/useSwipeSlide";
import { useAutoSlide } from "@/hooks/useSlideManagement";
import { useOpenSlide } from "@/hooks/useOpenSlide";

const Swipe = ({ children }) => {
    const {paramN} = useControl();
    const {
        setBb,
        selectedSlideId,
        setSelectedSlideId,
        activeSlide,
        setActiveSlide,
        slideMove,
        setSlideMove
    } = useCarouselState();
    const {slideId} = useParams();
    const totalSlides = React.Children.count(children);
    const swipeAreaRef = useRef(null);

    // Используем хук автоматического пролистывания
    useAutoSlide(slideMove, selectedSlideId, totalSlides, setActiveSlide, 1); // slideDirection = 1 (вправо)
    // Хук открытия слайда
    const {Open, Close} = useOpenSlide();
    // Хук для обработки свайпов и тапов
    const {handleTap, handleTapStart, handleDragEnd} = SwipeSlide(activeSlide, setActiveSlide, totalSlides, Open);
    useEffect(() => {
        if (slideId) {
            const id = parseInt(slideId);
            setSlideMove(false);
            if (!isNaN(id) && id >= 1 && id <= totalSlides) {
                setSelectedSlideId(id);
                setActiveSlide(id - 1);
            }
        } else {
            setSelectedSlideId(null);
            setBb(false);
        }
    }, [slideId, totalSlides, setSelectedSlideId, setBb, setActiveSlide]);
    // Упрощенная функция для расчета позиции слайда
    const getSlidePosition = (index) => {
        let position = index - activeSlide;
        // Для циклической карусели
        if (totalSlides > 3) {
            if (position > Math.floor(totalSlides / 2)) {
                position = position - totalSlides;
            } else if (position < -Math.floor(totalSlides / 2)) {
                position = position + totalSlides;
            }
        }
        return position;
    };

    return (
        <motion.div className={s.Main}>
            <div className={s.divTitle}>
                <div className={s.title}>Выбери свое</div>
                <div className={s.title}><h1 className={s.title}><strong>свадебное пригласительное</strong></h1></div>
                <div className={s.title}>и отправь гостям</div>
                <div className={s.shadow}></div>
            </div>
            {!selectedSlideId && (
                <div className={s.carousel}>
                    {/* Область свайпа теперь здесь */}
                    <motion.div
                        className={s.Sw}
                        ref={swipeAreaRef}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0}
                        onDragEnd={handleDragEnd}
                        onTapStart={handleTapStart}
                        onTap={(e, info) => handleTap(e, info, activeSlide)}
                        whileTap={{ cursor: 'grabbing' }}
                    />

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
                </div>
            )}

            {selectedSlideId !== null && (
                <motion.div className={s.fullscreenOverlay}>
                    <motion.div
                        className={s.fullscreenContent}
                        layoutId={`slide-${selectedSlideId}`}
                        transition={{ duration: 0.3 }}
                    >
                        {selectedSlideId && !paramN && (
                            <div className={s.Back} onClick={Close}>
                                <div className={s.ArrL}></div>
                                <div className={s.See}>К шаблонам</div>
                            </div>
                        )}
                        {React.Children.toArray(children).find(
                            (child) => child.props["data-id"] === selectedSlideId
                        )}
                    </motion.div>
                </motion.div>
            )}
            {!selectedSlideId && (
                <motion.div className={s.divNavi}>
                    <div className={s.navi}><CarouselNavigation /></div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Swipe;