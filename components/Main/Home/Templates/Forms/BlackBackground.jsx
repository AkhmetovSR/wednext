'use client';
import s from "@/components/Main/Home/Templates/Forms/FUniverse.module.css";
import {motion} from "framer-motion";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import FUniverse from "@/components/Main/Home/Templates/Forms/FUniverse";

export default function BlackBackground() {
    const { closeForm } = OpenAddEditForm();
    return (
        <motion.div className={s.BB} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FUniverse/>
            <motion.div className={s.BBClose} onClick={closeForm}></motion.div>
        </motion.div>
    );
}