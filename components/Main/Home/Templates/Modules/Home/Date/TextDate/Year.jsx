import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function Year({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;

    return (
        <motion.div
            className={`${s.Year} ${customClasses?.Year || ""}`}
            initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            transition={{ delay: 0.1 }}
        >
            {date.getFullYear()}
        </motion.div>
    );
}