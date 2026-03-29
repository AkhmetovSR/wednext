import s from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";
import {motion} from "framer-motion";

export default function YesOrNotBtn({isSlideOpen, customClasses, yesOrNot, setYesOrNot}) {
    return (
        <motion.div className={`${s.RYesOrNot} ${customClasses?.RYesOrNot || ""}`} initial={{scale: isSlideOpen ? 1 : 0.9}} animate={{scale: isSlideOpen ? 1 : 0.9}}>
            <motion.button className={`${s.YesOrNotBtn} ${customClasses?.YesOrNotBtn || ""} ${yesOrNot ? s.active : ""} ${yesOrNot ? customClasses.active : ""}`}
                           onClick={() => setYesOrNot(true)}
                           initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
            >
                Я приду
            </motion.button>
            {isSlideOpen &&
                <motion.button className={`${s.YesOrNotBtn} ${customClasses?.YesOrNotBtn || ""} ${!yesOrNot ? s.active : ""} ${!yesOrNot ? customClasses.active : ""}`}
                               onClick={() => setYesOrNot(false)}
                               initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                К сожалению, я не смогу прийти
            </motion.button>}
            {!isSlideOpen &&
                <motion.button className={`${s.YesOrNotBtn} ${customClasses?.YesOrNotBtn || ""} ${!yesOrNot ? s.active : ""} ${!yesOrNot ? customClasses.active : ""}`}
                               onClick={() => setYesOrNot(false)}
                               initial={{"--font-scale": isSlideOpen ? 1 : 0.7}} animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                    Не приду
            </motion.button>}
        </motion.div>
    );
}