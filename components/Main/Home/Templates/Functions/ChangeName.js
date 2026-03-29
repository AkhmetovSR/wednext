// Изменение первой буквы на заглавную
import {useWeddingData} from "@/components/Providers/Context";
import {useParams} from "next/navigation";

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

export const useCalculateFontSize = () => {
    const {weddingData} = useWeddingData();
    const {newlyWed1, newlyWed2} = weddingData;
    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    const length1 = Math.min(newlyWed1?.length || 0, 17);
    const length2 = Math.min(newlyWed2?.length || 0, 17);
    const maxLength = Math.max(length1, length2);
    const fontSizeCoefficients = {
        1: 3.0,
        2: 2.8,
        3: 2.6,
        4: 2.4,
        5: 2.2,
        6: 2.0,
        7: 1.3,
        8: 1,
        9: 1.6,
        10: 1.5,
        11: 1.4,
        12: 1.3,
        13: 1.2,
        14: 1.1,
        15: 0.9,
        16: 0.85,
        17: 0.8
    };
    return isSlideOpen ? (fontSizeCoefficients[maxLength] || 1.0) : (fontSizeCoefficients[maxLength] *0.5 || 1.0);
};