'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const usePreloadSlides = (totalSlides) => {
    const router = useRouter();

    useEffect(() => {
        // Проверяем, что router существует и prefetch доступен
        if (!router) return;
        if (typeof router.prefetch !== 'function') return;
        if (!totalSlides || totalSlides === 0) return;

        const prefetchSlide = async (i) => {
            try {
                await router.prefetch(`/${i}`);
            } catch (err) {

            }
        };

        for (let i = 1; i <= totalSlides; i++) {
            prefetchSlide(i);
        }
    }, [totalSlides, router]);
};