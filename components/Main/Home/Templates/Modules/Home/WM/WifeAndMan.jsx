import s from "@/components/Main/MainStyle.module.css";
import { motion } from 'framer-motion';
import {useWeddingData} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {useParams} from "next/navigation";

export default function WifeAndMan({customClasses, coefficient}) {
    const {weddingData} = useWeddingData();
    const {newlyWed1, newlyWed2} = weddingData;
    const {openForm} = OpenAddEditForm();

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL

    return (
        <motion.div className={`${s.WM} ${customClasses?.WM || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('wm')}} style={{ '--font-coefficient': coefficient }}>
            <motion.div className={`${s.WM1} ${customClasses?.WM1 || ""}`}>{newlyWed1}</motion.div>
            <motion.div className={`${s.AND} ${customClasses?.AND || ""}`}>&</motion.div>
            <motion.div className={`${s.WM2} ${customClasses?.WM2 || ""}`}>{newlyWed2}</motion.div>
        </motion.div>
    );
}