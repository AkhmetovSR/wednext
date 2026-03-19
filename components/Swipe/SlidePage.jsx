// app/[slideId]/page.js
'use client';

import { useParams } from 'next/navigation';
import { useCarouselState } from '@/components/Providers/Context';
import s from '@/components/Swipe/Swipe.module.css';
import { motion } from "framer-motion";
import { useOpenSlide } from "@/components/Main/Home/Templates/Functions/useOpenSlide";
import { tempArr } from "@/components/Carousel/tempArray";
import { useEffect } from 'react';

export default function SlidePage() {
    const params = useParams();
    const slideId = params?.slideId;
    const { selectedSlideId } = useCarouselState();
    const { closeSlide } = useOpenSlide();

    // ОТЛАДКА
    useEffect(() => {
        console.log('SlidePage Debug:', {
            slideIdFromURL: slideId,
            slideIdType: typeof slideId,
            slideIdAsNumber: parseInt(slideId),
            selectedSlideId,
            selectedSlideIdType: typeof selectedSlideId,
            tempArr: tempArr.map(item => ({
                id: item.id,
                idType: typeof item.id,
                hasDiv: !!item.div
            }))
        });
    }, [slideId, selectedSlideId]);

    // Поиск слайда
    const slideIdNum = parseInt(slideId);
    const slideContent = tempArr.find(item => item.id === slideIdNum);

    console.log('Search result:', {
        slideIdNum,
        found: !!slideContent,
        slideContent
    });

    if (!slideContent) {
        return (
            <div className={s.fullscreenOverlay}>
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
            </div>
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