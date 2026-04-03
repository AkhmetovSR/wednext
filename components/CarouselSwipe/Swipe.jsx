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
import Lottie from 'lottie-react';
import animationData from '@/public/lottie/Swipe.json';
import tapAnimation from '@/public/lottie/Tap.json';

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
                {autoSlide && <motion.div className={s.swipeAnimation} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}><Lottie animationData={animationData} loop={true} autoplay={true} style={{width: '100%'}}/></motion.div>}
                {!autoSlide && <motion.div className={s.tapAnimation} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 1}}><Lottie animationData={tapAnimation} loop={true} autoplay={true} style={{width: '8rem'}}/></motion.div>}
                {React.Children.map(children, (child, index) => {
                        const id = child.props["data-id"];
                        const position = getSlidePosition(index, activeSlide, totalSlides);
                        const isActive = index === activeSlide;
                        if (Math.abs(position) > 2) return null;
                        return (
                            <motion.div
                                key={id}
                                className={`${s.CardCont}`}
                                style={{zIndex: totalSlides - Math.abs(position)}}
                                layoutId={`slide-${id}`}
                                initial={false}
                                animate={{
                                    opacity: 1 - Math.abs(position) * 0.1,
                                    x: position * 140,
                                    scale: Math.max(0.1, 1 - Math.abs(position) * 0.1),
                                    rotateY: position * -15,
                                    z: Math.abs(position) * -80,
                                    filter: `blur(${Math.abs(position) * 3}px)`
                                }}
                                transition={{ duration: 0.3, ease: "easeOut", type: "tween", delay: 0 }}>
                                {!slideId && isActive && (<div className={s.Watch}>Посмотреть</div>)}
                                {child}
                            </motion.div>
                        );
                    })}
            </div>

            {/*<motion.div className={s.divNavi}>*/}
            {/*        <CarouselNavigation />*/}
            {/*</motion.div>*/}
        </motion.div>
    );
};

export default Swipe;
