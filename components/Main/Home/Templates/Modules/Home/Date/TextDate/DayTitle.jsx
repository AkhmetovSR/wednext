import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {useParams} from "next/navigation";

export default function DayTitle({customClasses}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL

    return (
        <motion.div className={`${s.DT} ${customClasses?.DT || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {(date.toLocaleDateString('ru-RU', {weekday: 'long'}))}
        </motion.div>
    );
}