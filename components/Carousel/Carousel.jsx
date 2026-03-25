'use client';
import s from "@/components/Carousel/Carousel.module.css";
import { motion } from "framer-motion";
import React, {useEffect} from "react";
import Swipe from "@/components/Swipe/Swipe";
import { useCarouselState } from "@/components/Providers/Context";
import { tempArr } from "@/components/Carousel/tempArray";
import {usePreloadSlides} from "@/hooks/usePreloadSlides";

export default function Carousel() {
    usePreloadSlides(tempArr.length); // Предзагрузка слайдов
    const {setBb} = useCarouselState();
    useEffect(() => {setBb(false);}, [setBb]);

    return (
        <Swipe>
            {tempArr.map((i) => (
                <motion.div data-id={i.id} key={i.id} className={s.Carousel} transition={{ duration: 0.3, delay: 0 }}>
                    {i.div}
                </motion.div>
            ))}
        </Swipe>
    );
}