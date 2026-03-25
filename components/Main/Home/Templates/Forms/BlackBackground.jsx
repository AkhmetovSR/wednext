'use client';
import s from "@/components/Main/Home/Templates/Forms/FUniverse.module.css";
import {motion} from "framer-motion";
import {useCarouselState} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";


export default function BlackBackground() {
    const { closeForm } = OpenAddEditForm();
    return (
        <motion.div className={s.BB} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onTap={closeForm}>

        </motion.div>
    );
}