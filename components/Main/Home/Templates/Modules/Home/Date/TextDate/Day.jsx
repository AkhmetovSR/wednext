import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";

export default function Day({customClasses, isSlideOpen}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;
    return (
        <motion.div
            className={`${s.Day} ${customClasses?.Day || ""}`}
            initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            transition={{ delay: 0.1 }}
        >
            {String(date.getDate()).padStart(2, '0')}
        </motion.div>
    );
}