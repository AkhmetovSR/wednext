// Изменение первой буквы на заглавную
export const formatName = (name, limit) => {
    if (!name) return '';
    return name
        .substring(0, limit)
        .replace(/[0-9]/g, '') // Удаляем цифры
        .replace(/[^a-zA-Zа-яА-ЯёЁ\s'\-()\.]/g, '') // Удаляем спецсимволы и эмодзи
        .toLowerCase()
        .replace(/(^|\s|-|'|\(|\.)\S/g, (match) => {
            return match.toUpperCase();
        })
        .replace(/\s+/g, ' '); // Убираем множественные пробелы
};
// Изменение шрифта в зависимости от количетсва букв
// export const calculateFontSize = (text1 = '', text2 = '', containerWidth = 0) => {
//     const maxLength = Math.max(text1.length, text2.length);
//     // Получаем значение CSS переменной
//     let fontScale = 0.9;
//     if (typeof window !== "undefined" && typeof getComputedStyle !== "undefined") {
//         const root = document.documentElement;
//         const scaleValue = getComputedStyle(root).getPropertyValue('--font-scale');
//         if (scaleValue) {
//             fontScale = parseFloat(scaleValue) || 1;
//         }
//     }
//     const baseFontSize = (containerWidth * 0.45) / (maxLength * 0.6);
//     const scaledFontSize = baseFontSize * fontScale;
//     return Math.round(
//         Math.max(containerWidth * 0.09, Math.min(scaledFontSize, containerWidth * 0.25))
//     );
// };

export const calculateFontSize = (text1 = '', text2 = '', isSlideOpen) => {
    const length1 = Math.min(text1?.length || 0, 17);
    const length2 = Math.min(text2?.length || 0, 17);
    const maxLength = Math.max(length1, length2);

    const fontSizeCoefficients = {
        1: 3.0,
        2: 2.8,
        3: 2.6,
        4: 2.4,
        5: 2.2,
        6: 2.0,
        7: 1.8,
        8: 1.7,
        9: 1.6,
        10: 1.5,
        11: 1.4,
        12: 1.3,
        13: 1.2,
        14: 1.1,
        15: 1,
        16: 1,
        17: 0.95
    };
    return isSlideOpen ? (fontSizeCoefficients[maxLength] || 1.0) : (fontSizeCoefficients[maxLength] *0.5 || 1.0);
};