'use client';
import { motion } from "framer-motion";
import React from "react";
import { useParams } from 'next/navigation';
import Link from "next/link";
import s from "@/components/CarouselSwipe/Swipe.module.css";
import { useCarouselState } from "@/components/Providers/Context";
import CarouselNavigation from "@/components/CarouselSwipe/CarouselNavigation";
import {useSwipeSlide} from "@/hooks/useSwipeSlide";
import { useAutoSlide } from "@/hooks/useSlideManagement";
import Title from "@/components/CarouselSwipe/Title";
import { getSlidePosition } from '@/utils/slidePosition';
import {useSlideSync} from "@/hooks/useSlideSync";

const Swipe = ({ children }) => {
    const { setBb, activeSlide, setActiveSlide, autoSlide, setAutoSlide } = useCarouselState();
    const params = useParams();
    const slideId = params?.slideId;
    const totalSlides = React.Children.count(children);

    const {swipeHandlers} = useSwipeSlide(totalSlides); //Свайпы
    useAutoSlide(autoSlide, slideId, totalSlides, setActiveSlide, 1); //Автопролистывание
    useSlideSync(slideId, totalSlides, setBb, setActiveSlide, setAutoSlide); //Синхронизация активного слайда с URL

    // Рандомная цена для демо (можно заменить на реальную)
    const prices = {
        1: 499,
        2: 599,
        3: 699,
        4: 799,
        5: 899,
        6: 999,
        7: 1099,
        8: 1199,
        9: 1299,
        10: 1399,
        11: 1499,
    };

    const currentPrice = prices[activeSlide + 1];

    return (
        <motion.div className={s.Main}>
            <Title/>
            <div className={s.carousel}>
                    <motion.div className={s.SwipeZone} {...swipeHandlers}><Link href={`/temp/${activeSlide + 1}`} prefetch className={s.Link}/></motion.div>
                    {React.Children.map(children, (child, index) => {
                        const id = child.props["data-id"];
                        const position = getSlidePosition(index, activeSlide, totalSlides);
                        const isActive = index === activeSlide;
                        if (Math.abs(position) > 1) return null;

                        return (
                            <motion.div
                                key={id}
                                className={`${s.CardCont}`}
                                style={{zIndex: totalSlides - Math.abs(position)}}
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
                                {!slideId && isActive && (<div className={s.Watch}>Посмотреть</div>)}
                                {child}
                            </motion.div>
                        );
                    })}
            </div>

            <motion.div className={s.divNavi}>
                    <CarouselNavigation />
            </motion.div>
        </motion.div>
    );
};

export default Swipe;