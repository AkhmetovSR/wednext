import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";

export default function Intro({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {intro} = weddingData;
    const {openForm} = AddEditForm();

    return (
        <motion.div className={`${s.intro} ${customClasses?.intro || ""}`}
                    initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                    animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                    onClick={() => {openForm('intro')}}
        >
            {intro}
        </motion.div>
    );
}