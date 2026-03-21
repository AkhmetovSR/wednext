// import { useNavigate } from 'react-router-dom';
// import { useCarouselState } from '../../../../../Context';
//
// export const OpenSlide = () => {
//     const navigate = useNavigate();
//     const { setBb, setSelectedSlideId, setActiveSlide } = useCarouselState();
//
//     const Open = (id) => {
//         navigate(`/${id}`);
//         setActiveSlide(id - 1);
//     };
//
//     const Close = () => {
//         setBb(false);
//         navigate(-1);
//     };
//
//     return {
//         Open,
//         Close
//     };
// };

'use client';

import { useRouter } from 'next/navigation';
import { useCarouselState } from '@/components/Providers/Context';

export const useOpenSlide = () => {
    const router = useRouter();
    const { setBb, setSelectedSlideId, setActiveSlide, setIsSlideOpen } = useCarouselState();

    const openSlide = (id) => {
        // В Next.js навигация через push
        router.push(`/${id}`);
        setActiveSlide(id - 1);
        setSelectedSlideId(id); // если нужно
        setIsSlideOpen(true);
        // если нужно
    };

    const closeSlide = () => {
        setBb(false);
        // Возврат на предыдущую страницу
        router.push(`/`);
        setIsSlideOpen(false);
    };

    return {
        openSlide,
        closeSlide
    };
};