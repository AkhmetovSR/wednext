// components/WifeAndMan/WifeAndMan.jsx
import s from "@/components/Main/MainStyle.module.css";
import { motion } from 'framer-motion';
import {useWeddingData} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {useParams} from "next/navigation";
// import { useDynamicFont } from '@/components/Main/Home/Templates/Functions/useDynamicFont';
// import styles from './WifeAndMan.module.css';

export default function WifeAndMan({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {newlyWed1, newlyWed2} = weddingData;
    const {openForm} = OpenAddEditForm();

    return (
        <motion.div className={`${s.WM} ${customClasses?.WM || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('wm')}}>
            <motion.div className={`${s.WM1} ${customClasses?.WM1 || ""}`}>{newlyWed1}</motion.div>
            <motion.div className={`${s.AND} ${customClasses?.AND || ""}`}>&</motion.div>
            <motion.div className={`${s.WM2} ${customClasses?.WM2 || ""}`}>{newlyWed2}</motion.div>
        </motion.div>
    );
}