'use client';
import {useSwipeable} from "react-swipeable";
import {useCarouselState} from "@/components/Providers/Context";
import {useParams} from "next/navigation";

export const useSwipeSlide = (totalSlides) => {
    const params = useParams();
    const slideId = params?.slideId;
    const {setActiveSlide, setAutoSlide } = useCarouselState();

    const goToNextSlide = () => {
        if (slideId) return;
        setActiveSlide(prev => {
            let nextSlide = prev + 1;
            setAutoSlide(false);
            return nextSlide >= totalSlides ? 0 : nextSlide;
        });
    };
    const goToPrevSlide = () => {
        if (slideId) return;
        setActiveSlide(prev => {
            let prevSlide = prev - 1;
            setAutoSlide(false);
            return prevSlide < 0 ? totalSlides - 1 : prevSlide;
        });
    };
    // Cвайпы через библиотеку useSwipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: goToNextSlide,
        onSwipedRight: goToPrevSlide,
        delta: 5,
        preventDefaultTouchmoveEvent: true
    });

    return {
        goToNextSlide,
        goToPrevSlide,
        swipeHandlers
    };
};