import s from "@/components/Main/Home/Templates/Modules/Home/WM/WifeAndMan.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";
import {calculateFontSize} from "@/components/Main/Home/Templates/Functions/ChangeName";

export default function WifeAndMan({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {newlyWed1, newlyWed2} = weddingData;
    const {openForm} = AddEditForm();

    return (
        <motion.div className={`${s.WM} ${customClasses?.WM || ""}`} onClick={() => {openForm('wm')}}>
            <motion.div className={`${s.WM1} ${customClasses?.WM1 || ""}`}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            >
                {newlyWed1}
            </motion.div>
            <motion.div className={`${s.AND} ${customClasses?.AND || ""}`}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            >
                &
            </motion.div>
            <motion.div className={`${s.WM2} ${customClasses?.WM2 || ""}`}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
            >
                {newlyWed2}
            </motion.div>
        </motion.div>
    );
}