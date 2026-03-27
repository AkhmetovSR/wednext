'use client';

import { motion } from "framer-motion";
import React from "react";
import { useParams } from 'next/navigation';
import Link from "next/link";
import s from "@/components/Swipe/Swipe.module.css";
import { useCarouselState } from "@/components/Providers/Context";
import CarouselNavigation from "@/components/Carousel/CarouselNavigation";
import {useSwipeSlide} from "@/hooks/useSwipeSlide";
import { useAutoSlide } from "@/hooks/useSlideManagement";
import Title from "@/components/Swipe/Title";
import { getSlidePosition } from '@/utils/slidePosition';
import {useSlideSync} from "@/hooks/useSlideSync";

const Swipe = ({ children }) => {
    const { setBb, selectedSlideId, setSelectedSlideId, activeSlide, setActiveSlide, autoSlide, setAutoSlide } = useCarouselState();
    const params = useParams();
    const slideId = params?.slideId;
    const totalSlides = React.Children.count(children);

    // Свайпы
    const {swipeHandlers} = useSwipeSlide(activeSlide, setActiveSlide, totalSlides);
    // Автопролистывание
    useAutoSlide(autoSlide, selectedSlideId, totalSlides, setActiveSlide, 1);
    // Синхронизация активного слайда с URL
    useSlideSync(slideId, totalSlides, setSelectedSlideId, setBb, setActiveSlide, setAutoSlide);
    // Исчезновение карусели
    if (slideId) return null;

    return (
        <motion.div className={s.Main}>
            <Title activeSlide={activeSlide} />

            <div className={s.carousel}>
                <Link  href={`/${activeSlide + 1}`} prefetch className={s.Link}>
                    <motion.div className={s.SwipeZone}{...swipeHandlers}>
                        <div className={s.info}>
                            <span>Открыть слайд {activeSlide + 1}</span>
                            <span className={s.arrow}>→</span>
                        </div>
                    </motion.div>

                    {React.Children.map(children, (child, index) => {
                        const id = child.props["data-id"];
                        const position = getSlidePosition(index, activeSlide, totalSlides);
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