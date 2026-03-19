import s from "@/components/Main/Home/Templates/Modules/Analytic/Analytic.module.css";
import { motion } from "framer-motion";

export default function GuestList({guests, activeTab, renderDrinks, customClasses}) {
    return (
        <div>
            {activeTab === 'attending' ? guests.safeGuestYes.map((guest, index) => (
                <motion.div
                    key={guest.id || Math.random()}
                    className={`${s.Line} ${customClasses?.Line || ""}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                >
                    <div className={`${s.Number} ${customClasses?.Number || ""}`}>
                        {index + 1}.
                    </div>
                    <div className={`${s.Guest} ${customClasses?.Guest || ""}`}>
                        {guest.guest || "Имя не указано"}
                    </div>
                    <div className={`${s.Alco} ${customClasses?.Alco || ""}`}>
                        {renderDrinks(guest)}
                    </div>
                </motion.div>
            )) : guests.safeGuestNot.map((guest, index) => (
                <motion.div
                    key={guest.id || Math.random()}
                    className={`${s.Line} ${customClasses?.Line || ""}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                >
                    <div className={`${s.Number} ${customClasses?.Number || ""}`}>
                        {index + 1}.
                    </div>
                    <div className={`${s.Guest} ${customClasses?.Guest || ""}`}>
                        {guest.guest || "Имя не указано"}
                    </div>
                </motion.div>
            ))
            }
        </div>
    );
}