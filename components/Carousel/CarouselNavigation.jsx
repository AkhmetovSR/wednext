import React from "react";
import {useCarouselState} from "@/components/Providers/Context";
import {SwipeSlide} from "@/hooks/useSwipeSlide";
import s from "@/components/Main/Home/Home.module.css";

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
        "1000 ₽",
        "2 000 ₽"
    ];
    const {activeSlide, setActiveSlide} = useCarouselState();
    const totalSlides = price.length;
    // Используем хук свайпа с функциями навигации
    const {goToNextSlide, goToPrevSlide} = SwipeSlide(activeSlide, setActiveSlide, totalSlides);
    // Не показываем кнопки когда слайд открыт в полноэкранном режиме
    // if (selectedSlideId) {return null;} ???????????????????????
    // Получаем названия для отображения с циклической логикой
    const currentSlideName = price[activeSlide];

    return (
        <div className={s.navigationContainer}>
            <div className={s.navButton1} onClick={goToPrevSlide}></div>
            <div className={s.currentSlide}>{currentSlideName}</div>
            <div className={s.navButton2} onClick={goToNextSlide}></div>
        </div>
    );
};

export default CarouselNavigation;