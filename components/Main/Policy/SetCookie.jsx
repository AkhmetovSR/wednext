import s from "./Policy.module.css";
import { motion } from "framer-motion";

export default function setCookie({setCookie}) {
    return (
        <motion.div className={s.MCookie} initial={{opacity: 0.7}} animate={{opacity: 1}}>
            <div>
                <div>Категория: обязательный</div>
                <div>Внимание, если вы отключите данные файлы cookie, то:
                    <br/>1. Окно cookie будет мешать работать с сайтом
                    <br/>2. Отправка анкеты гостем, может работать некорректно
                </div>
                <div>
                    <div><input type={"checkbox"} checked/></div>
                    <div>CookYes</div>
                </div>
                <div>
                    <input type={"checkbox"} checked/>
                </div>
            </div>
        </motion.div>
    );
}