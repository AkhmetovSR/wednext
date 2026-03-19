import s from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";
import {motion} from "framer-motion";


export default function AllOrIam({customClasses, selectedOption, onOptionChange}) {
    return (
        <motion.div className={`${s.AllOrIam} ${customClasses?.AllOrIam || ""}`}>
            <button className={`${s.choiceButton} ${selectedOption === "1" ? s.active : ""}`} onClick={() => onOptionChange("1")}>Только за себя</button>
            <button className={`${s.choiceButton} ${selectedOption === "2" ? s.active : ""}`} onClick={() => onOptionChange("2")}>За всю свою группу (семью/друзей)</button>
        </motion.div>
    );
}