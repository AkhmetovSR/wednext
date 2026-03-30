'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {useCarouselState, useControl} from '@/components/Providers/Context';
import s from '@/components/CarouselSwipe/Swipe.module.css';
import { motion } from "framer-motion";
import { tempArr } from "@/initData/tempArray";
import React from "react";
import BlackBackground from "@/components/Main/Home/Templates/Forms/BlackBackground";
import AutoRedirect from "@/components/Main/Home/Templates/Functions/AutoRedirect";

export default function SlidePage() {
    const params = useParams();
    const slideId = params?.slideId;
    const {paramN, isE} = useControl();
    const {bb} = useCarouselState();
    const slideIdNum = parseInt(slideId); //Поиск слайда
    const slideContent = tempArr.find(item => item.id === parseInt(slideIdNum));
    if (!slideContent) {
        return (
            <motion.div className={s.fullscreenOverlay}>
                <AutoRedirect to="/" delay={3000} condition={true}/>
                <div className={s.fullscreenContent}>
                    <Link href="/" className={s.Back}>
                        <div className={s.ArrL}></div>
                        <div className={s.See}>К шаблонам</div>
                    </Link>
                    <div className={s.noSlde}>
                        <div>Шаблон не найден</div>
                        <div>Сейчас вернемся к шаблонам...</div>
                        <div className={s.Stop}>🚧</div>

                        {/*<p>Слайд {slideId} не существует</p>*/}
                        {/*<p>ID из URL: {slideId} (тип: {typeof slideId})</p>*/}
                        {/*<p>Доступные ID: {tempArr.map(t => t.id).join(', ')}</p>*/}
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div className={s.fullscreenOverlay}>
            {bb && (!paramN || isE) && (<BlackBackground slideId={slideId}/>)} {/*!!!!!!!!!!!!!!!!!!!!!! Проверить условия */}
            <motion.div className={s.fullscreenContent} layoutId={`slide-${slideId || slideIdNum}`} transition={{ duration: 0.3, delay: 0 }}>
                <Link href="/" className={s.Back}>
                    <div className={s.See}>К шаблонам</div>
                </Link>
                {slideContent.div}
            </motion.div>
        </motion.div>
    );
}