'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {useCarouselState, useControl} from '@/components/Providers/Context';
import s from '@/components/Swipe/Swipe.module.css';
import { motion } from "framer-motion";
import { tempArr } from "@/components/Carousel/tempArray";
import {SwipeSlide} from "@/hooks/useSwipeSlide";
import React, {useEffect} from "react";
import BlackBackground from "@/components/Main/Home/Templates/Forms/BlackBackground";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";

export default function SlidePage() {
    const params = useParams();
    const slideId = params?.slideId;
    const {paramN, isE} = useControl();
    const {selectedSlideId, setSelectedSlideId, bb} = useCarouselState();

    const { closeSlide } = SwipeSlide();
    useEffect(() => {setSelectedSlideId(parseInt(slideId)); // устанавливаем в контекст
    }, [slideId, setSelectedSlideId]);
    // Поиск слайда
    const slideIdNum = parseInt(slideId);
    const slideContent = tempArr.find(item => item.id === parseInt(slideIdNum));

    if (!slideContent) {
        return (
            <motion.div className={s.fullscreenOverlay}>
                <div className={s.fullscreenContent}>
                    <div className={s.Back} onClick={closeSlide}>
                        <div className={s.ArrL}></div>
                        <div className={s.See}>К шаблонам</div>
                    </div>
                    <div style={{ padding: '50px', textAlign: 'center' }}>
                        <h2>Слайд не найден</h2>
                        <p>Слайд {slideId} не существует</p>
                        <p>ID из URL: {slideId} (тип: {typeof slideId})</p>
                        <p>Доступные ID: {tempArr.map(t => t.id).join(', ')}</p>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div className={s.fullscreenOverlay}>
            {bb && (!paramN || isE) && (<BlackBackground/>)}
            <motion.div
                className={s.fullscreenContent}
                layoutId={`slide-${selectedSlideId || slideIdNum}`}
                transition={{ duration: 0.3, delay: 0 }}
            >
                <Link href="/" className={s.Back} onClick={closeSlide}> {/* ← заменить на Link */}
                    <div className={s.ArrL}></div>
                    <div className={s.See}>К шаблонам</div>
                </Link>
                {slideContent.div}
            </motion.div>
        </motion.div>
    );
}