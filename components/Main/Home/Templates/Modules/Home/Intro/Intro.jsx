import s from "@/components/Main/MainStyle.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";

export default function Intro({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {intro} = weddingData;
    const {openForm} = AddEditForm();

    return (
        <motion.div className={`${s.intro} ${customClasses?.intro || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('intro')}}>
            {intro}
        </motion.div>
    );
}