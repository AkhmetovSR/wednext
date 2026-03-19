import s from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";
import {motion} from "framer-motion";
import {formatName} from "@/components/Main/Home/Templates/Functions/ChangeName";

export default function InputFIO({isSlideOpen, customClasses, nameError, setNameError, FIO, setFIO}) {
    return (
        <motion.div className={`${s.InputFIO} ${customClasses?.InputFIO || ""}`}  initial={{scale: isSlideOpen ? 1 : 0.9}} animate={{scale: isSlideOpen ? 1 : 0.9}}>
                <input className={`${s.RSVPFIO} ${customClasses?.RSVPFIO || ""}`}
                       style={{border: nameError ? "2px solid red" : ""}}
                       type="text" maxLength="60" placeholder="укажите Ваше ФИО"
                       value={FIO} onChange={(e) => {
                    setNameError(false);
                    setFIO(formatName(e.target.value, 60));
                }}/>
        </motion.div>
    );
}