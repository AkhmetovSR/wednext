'use client';

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
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
    const router = useRouter();

    // Вся логика жестов вынесена в хук
    const {handleTapStart, handleTap, handleDragStart, handleDragEnd, setLinkRef} = SwipeSlide(activeSlide, setActiveSlide, totalSlides);
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
                <Link ref={setLinkRef} href={`/${activeSlide + 1}`} prefetch className={s.Link}>
                    <motion.div
                        className={s.Sw}
                        ref={swipeAreaRef}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onTapStart={handleTapStart}
                        onTap={handleTap}
                        style={{ cursor: 'pointer' }}
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