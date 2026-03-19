import s from "@/components/Main/Home/Templates/Modules/RVSP/WithMe/WithMe.module.css";
import { motion } from "framer-motion";

export default function WithMe({isSlideOpen, setAddGuset}) {
    return (
        <motion.div className={s.WithMe} initial={{scale: isSlideOpen ? 1 : 0.9}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7, scale: isSlideOpen ? 1 : 0.9}}>
            <motion.div className={s.MyGruop} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>Со мной придут</motion.div>
            <div className={s.AddRemGroup}>
                <button onClick={() => (setAddGuset(true))}>+ Добавить</button>
                <button>- Удалить</button>
            </div>
        </motion.div>
    );
}