'use client';
import s from "@/components/CarouselSwipe/Carousel.module.css";
import { motion } from "framer-motion";
import React, {useEffect} from "react";
import Swipe from "@/components/CarouselSwipe/Swipe";
import { useCarouselState } from "@/components/Providers/Context";
import { tempArr } from "@/initData/tempArray";
import {usePreloadSlides} from "@/hooks/usePreloadSlides";

export default function Carousel() {
    usePreloadSlides(tempArr.length); // Предзагрузка слайдов
    const {setBb} = useCarouselState();
    useEffect(() => {setBb(false);}, [setBb]);

    return (
        // Если шаблонов нет показывать заглушку и кнопку, которая будет делать повторный релоад шаблонов???
        <Swipe>
            {tempArr.map((i) => (
                <motion.div data-id={i.id} key={i.id} className={s.Carousel}>
                    {i.div}
                </motion.div>
            ))}
        </Swipe>
    );
}