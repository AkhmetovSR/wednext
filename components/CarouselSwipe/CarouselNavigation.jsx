import React from "react";
import {useCarouselState} from "@/components/Providers/Context";
import {useSwipeSlide} from "@/hooks/useSwipeSlide";
import s from "@/components/CarouselSwipe/Carousel.module.css";

const CarouselNavigation = () => {
    const price = [
        "100 ₽",
        "200 ₽",
        "300 ₽",
        "400 ₽",
        "500 ₽",
        "600 ₽",
        "700 ₽",
        "800 ₽",
        "900 ₽",
        "1 000 ₽",
        "2 000 ₽"
    ];
    const { activeSlide } = useCarouselState();
    const totalSlides = price.length;
    const { goToNextSlide, goToPrevSlide } = useSwipeSlide(totalSlides);
    const currentSlideName = price[activeSlide];

    return (
        <div className={s.navigationContainer}>
            <button className={s.navButton} onClick={goToPrevSlide} aria-label="Предыдущий слайд"></button>
            <div className={s.priceContainer}>
                <span className={s.priceValue}>{currentSlideName}</span>
            </div>
            <button className={s.navButton} onClick={goToNextSlide} aria-label="Следующий слайд"></button>
        </div>
    );
};

export default CarouselNavigation;