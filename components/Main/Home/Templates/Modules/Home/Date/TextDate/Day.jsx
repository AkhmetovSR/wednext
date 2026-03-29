import s from "@/components/Main/Home/Templates/Temp/T3/Temp3.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {useParams} from "next/navigation";

export default function Day({customClasses}) {
    const { weddingData } = useWeddingData();
    const { date } = weddingData;

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    return (
        <motion.div className={`${s.Day} ${customClasses?.Day || ""} ${isSlideOpen ? s.open : s.closed}`}>
            {String(date.getDate()).padStart(2, '0')}
        </motion.div>
    );
}