import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {useParams} from "next/navigation";

export default function Month({customClasses}) {
    const { weddingData } = useWeddingData();
    const {date} = weddingData;
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель",
        "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    return (
        <motion.div className={`${s.Month} ${customClasses?.Month || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {(date ? (monthNames[date.getMonth()]).toUpperCase() : "Месяц").substring(0, 3)}
        </motion.div>
    );
}