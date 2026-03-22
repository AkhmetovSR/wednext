'use client';
import s from "@/components/Carousel/Carousel.module.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";  // ← добавляем Link
import Swipe from "@/components/Swipe/Swipe";
import { useControl, useCarouselState } from "@/components/Providers/Context";
import { useAddEditForm } from "@/hooks/useAddEditForm";
import { tempArr } from "@/components/Carousel/tempArray";
import { useRouter } from "next/navigation";

export default function Carousel() {
    const router = useRouter();
    const { paramN, isE } = useControl();
    const { selectedSlideId, bb } = useCarouselState();
    const { closeForm } = useAddEditForm();

    // Предзагрузка всех слайдов
    useEffect(() => {
        if (!router) return;
        for (let i = 1; i <= tempArr.length; i++) {
            router.prefetch(`/${i}`);
        }
    }, [router]);

    return (
        <Swipe>
            {tempArr.map((i) => (
                <Link 
                    key={i.id} 
                    href={`/${i.id}`}
                    prefetch={false}  // отключаем, так как уже предзагрузили выше
                    style={{ display: 'contents' }}  // чтобы не ломал анимации
                >
                    <motion.div 
                        data-id={i.id} 
                        className={s.Carousel} 
                        style={{ borderRadius: selectedSlideId ? 0 : 25 }} 
                        transition={{ duration: 0.3, delay: 0 }}
                    >
                        {i.div}
                        {selectedSlideId && bb && (!paramN || isE) && (
                            <motion.div className={s.BB}>
                                <motion.div className={s.divClose} onTap={closeForm}></motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                </Link>
            ))}
        </Swipe>
    );
}