import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function Day({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;
    return (
        <motion.div className={`${s.Day} ${customClasses?.Day || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {String(date.getDate()).padStart(2, '0')}
        </motion.div>
    );
}