import s from "@/components/Main/Home/Templates/Modules/Analytic/Analytic.module.css";
import { motion } from "framer-motion";

export default function DrinkSummary({ totalDrinks, wordsWithCount, customClasses }) {
    return (
        <div className={`${s.DrinkSummary} ${customClasses?.DrinkSummary || ""}`}>
            <div className={s.defDrink}>
                <div className={s.drinkRow}>
                    <div>Водка</div>
                    <div className={s.dCount}>{totalDrinks.vodka}</div>
                </div>
                <div className={s.drinkRowG}>
                    <div>Коньяк</div>
                    <div className={s.dCount}>{totalDrinks.cognac}</div>
                </div>
                <div className={s.drinkRow}>
                    <div>Вино</div>
                    <div className={s.dCount}>{totalDrinks.wine}</div>
                </div>
                <div className={s.drinkRowG}>
                    <div>Шампанское</div>
                    <div className={s.dCount}>{totalDrinks.champagne}</div>
                </div>
            </div>

            <div className={s.drinkOther}>
                <div className={s.Other}>
                    <div>Другое: {wordsWithCount.length}</div>
                    <div className={s.OtherDrink}>
                        {wordsWithCount.map((item) => (
                            <motion.div className={`${s.otherLine} ${customClasses?.otherLine || ""}`}>
                                <div>{item.word}</div>
                                <div className={s.oCount}>{item.count}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}