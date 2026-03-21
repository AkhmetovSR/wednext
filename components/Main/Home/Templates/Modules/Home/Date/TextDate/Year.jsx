import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function Year({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;

    return (
        <motion.div className={`${s.Year} ${customClasses?.Year || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {date.getFullYear()}
        </motion.div>
    );
}