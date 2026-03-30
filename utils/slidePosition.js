/**
 * Вычисляет позицию слайда относительно активного
 * @param {number} index - индекс слайда
 * @param {number} activeSlide - индекс активного слайда
 * @param {number} totalSlides - общее количество слайдов
 * @returns {number} позиция слайда (-1, 0, 1 и т.д.)
 */
export const getSlidePosition = (index, activeSlide, totalSlides) => {
    let position = index - activeSlide;
    if (totalSlides > 3) {
        if (position > Math.floor(totalSlides / 2)) {
            position = position - totalSlides;
        } else if (position < -Math.floor(totalSlides / 2)) {
            position = position + totalSlides;
        }
    }
    return position;
};