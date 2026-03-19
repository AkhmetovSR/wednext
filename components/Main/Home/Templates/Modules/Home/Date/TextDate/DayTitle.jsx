import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function DayTitle({isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;
    return (
        <motion.div
            className={s.DT}
            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
            transition={{ delay: 0.1 }}
        >
            {(date.toLocaleDateString('ru-RU', {weekday: 'long'}))}
        </motion.div>
    );
}