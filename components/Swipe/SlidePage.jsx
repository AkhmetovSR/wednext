'use client';

import { useParams } from 'next/navigation';
import { useCarouselState } from '@/components/Providers/Context';
import s from '@/components/Swipe/Swipe.module.css';
import { motion } from "framer-motion";
import { useOpenSlide } from "@/components/Main/Home/Templates/Functions/useOpenSlide";
import { tempArr } from "@/components/Carousel/tempArray";
import {SwipeSlide} from "@/hooks/useSwipeSlide";
import {useEffect} from "react";

export default function SlidePage() {
    const params = useParams();
    const slideId = params?.slideId;
    const { selectedSlideId, setSelectedSlideId } = useCarouselState();
    // const { closeSlide } = useOpenSlide();
    console.log("slideId" + slideId)

    const { closeSlide } = SwipeSlide();
    useEffect(() => {
        setSelectedSlideId(parseInt(slideId)); // устанавливаем в контекст
    }, [slideId]);
    // Поиск слайда
    const slideIdNum = parseInt(slideId);
    const slideContent = tempArr.find(item => item.id === parseInt(slideIdNum));

    if (!slideContent) {
        return (
            <motion.div className={s.fullscreenOverlay}

            >
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
            <motion.div
                className={s.fullscreenContent}
                layoutId={`slide-${selectedSlideId || slideIdNum}`}
                transition={{ duration: 0.3 }}
            >
                <div className={s.Back} onClick={closeSlide}>
                    <div className={s.ArrL}></div>
                    <div className={s.See}>К шаблонам</div>
                </div>
                {slideContent.div}
            </motion.div>
        </motion.div>
    );
}