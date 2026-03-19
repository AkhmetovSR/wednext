import s from "@/components/Main/Home/Templates/Modules/RVSP/AlcoPrefer/AlcoPrefer.module.css";
import {motion} from "framer-motion";
import {filterNumbers} from "@/components/Main/Home/Templates/Functions/filterNum";

const alcoOptions = [
    {id: 1, type: "Водка"},
    {id: 2, type: "Коньяк"},
    {id: 3, type: "Вино"},
    {id: 4, type: "Шампанское"},
    {id: 5, type: "другое..."}
];

export default function AlcoPrefer({alcoStates, handleClick, setOtherDrink, otherDrink, isSlideOpen, customClasses}) {
    const tapAlco = (id) => {
        handleClick(id);
        if (!alcoStates["5"]) setOtherDrink("");
    };

    return (
        <motion.div className={s.AlcoPrefer} initial={{scale: isSlideOpen ? 1 : 0.9}}
                    animate={{scale: isSlideOpen ? 1 : 0.9}}>
            <motion.div className={s.Title} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>Предпочтения по напиткам
            </motion.div>
            <motion.div className={s.divAlco}>
                {alcoOptions.map((option) => (
                    <motion.button
                        key={option.id}
                        className={`${s.AlcoButton} ${customClasses?.AlcoButton || ""} ${alcoStates[option.id] ? s.active : ""} ${alcoStates[option.id] ? customClasses.active : ""}`}
                        onClick={() => tapAlco(option.id)}
                        initial={{scale: isSlideOpen ? 1 : 0.7}}
                        animate={{scale: isSlideOpen ? 1 : 0.7}}
                    >
                        {option.type}
                    </motion.button>
                ))}
            </motion.div>
            <motion.div
                className={s.divOtherAlco}
                initial={{opacity: 0}}
                animate={{opacity: alcoStates["5"] ? 1 : 0, scale: alcoStates["5"] ? 1 : 0}}
                transition={{duration: 0.2}}
            >
                <input
                    id="inputAlco"
                    className={s.OtherAlco}
                    type="text"
                    maxLength="30"
                    placeholder="сок, кола и другие напитки..."
                    value={otherDrink}
                    onChange={(e) => {
                        const filteredValue = filterNumbers(e.target.value);
                        setOtherDrink(filteredValue);
                    }}
                />
            </motion.div>
        </motion.div>
    );
}