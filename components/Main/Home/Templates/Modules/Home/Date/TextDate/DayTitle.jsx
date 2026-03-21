import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function DayTitle({isSlideOpen, customClasses}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;

    return (
        <motion.div className={`${s.DT} ${customClasses?.DT || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {(date.toLocaleDateString('ru-RU', {weekday: 'long'}))}
        </motion.div>
    );
}