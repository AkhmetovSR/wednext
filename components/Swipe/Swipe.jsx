'use client';

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useParams } from 'next/navigation';
import s from "@/components/Swipe/Swipe.module.css";
import { useCarouselState } from "@/components/Providers/Context";
import CarouselNavigation from "@/components/Carousel/CarouselNavigation";
import { SwipeSlide } from "@/hooks/useSwipeSlide";
import { useAutoSlide } from "@/hooks/useSlideManagement";
import Title from "@/components/Swipe/Title";

const Swipe = ({ children }) => {
    const {
        setBb,
        selectedSlideId,
        setSelectedSlideId,
        activeSlide,
        setActiveSlide,
        slideMove,
        setSlideMove
    } = useCarouselState();
    const params = useParams();
    const slideId = params?.slideId;
    const totalSlides = React.Children.count(children);
    const swipeAreaRef = useRef(null);

    useAutoSlide(slideMove, selectedSlideId, totalSlides, setActiveSlide, 1);

    const { handleTap, handleTapStart, handleDragEnd } = SwipeSlide(activeSlide, setActiveSlide, totalSlides);

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
    }, [slideId, totalSlides, setSelectedSlideId, setBb, setActiveSlide, setSlideMove]);

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

    // Если есть slideId - значит мы на странице слайда, не показываем карусель
    if (slideId) return null;

    return (
        <motion.div className={s.Main}>
            <Title/>

            <div className={s.carousel}>
                <motion.div
                    className={s.Sw}
                    ref={swipeAreaRef}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDragEnd={handleDragEnd}
                    onTapStart={handleTapStart}
                    onTap={(e, info) => handleTap(e, info, activeSlide)}
                    dragMomentum={false}
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

            {/*{!selectedSlideId && (*/}
                <motion.div className={s.divNavi}>
                    <div className={s.navi}><CarouselNavigation /></div>
                </motion.div>
            {/*)}*/}
        </motion.div>
    );
};

export default Swipe;