import s from "./Policy.module.css";
import {AnimatePresence, motion, LayoutGroup} from "framer-motion";
import CookieManager from "../../../OokieManager";
import {useState} from "react";
import CookiePolicy from "./CookiePolicy";
import {usePageContext} from "../../../Context";

export default function CookiePush({setCookieAccepted, setShowCookieBanner}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { activePage } = usePageContext();
    function CookApply() {
        CookieManager.set("CookYes", "true");
        setCookieAccepted(true);
        setShowCookieBanner(false);
    }
    function CookNot() {
        setCookieAccepted(false);
        setShowCookieBanner(false);
    }

    return (
        <motion.div className={s.MCookie} initial={{opacity: 0.7}} animate={{opacity: 1}}>
            <motion.div className={s.CloseBB} onTap={CookNot}></motion.div>
            <LayoutGroup>
                <motion.div className={`${s.Cook} ${isExpanded ? s.expanded : ''}`} layout>
                    <div className={s.divClose}>
                        <button className={s.closeButton} onClick={CookNot}>×</button>
                    </div>
                    <div className={s.Cont}>
                        <AnimatePresence mode="wait">
                            {!isExpanded ? (
                                <motion.div key="simple" layout transition={{duration: 0.2}}>
                                    <div className={s.Title}>Cookie 🍪</div>
                                    {activePage === 'rsvp' ?
                                        <div className={s.Info}>Чтобы отправить анкету, нужно ознакомиться с политикой
                                            использования файлов cookie и нажать на кнопку "Принять".
                                            <button className={s.PolicyButton} onClick={() => setIsExpanded(true)}>
                                                Политика использования cookie
                                            </button>
                                        </div>
                                        :
                                        (<div className={s.Info}>
                                            Для работы сайта используются файлы 'Cookie'. Ознакомиться с ними Вы можете
                                        здесь:
                                        <button className={s.PolicyButton} onClick={() => setIsExpanded(true)}>
                                            Политика использования cookie
                                        </button>
                                    </div>)}
                                </motion.div>
                            ) : (
                                <motion.div key="policy" layout transition={{duration: 0.2}}>
                                    <CookiePolicy isExpanded={isExpanded} CookNot={CookNot} setIsExpanded={setIsExpanded}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.div className={s.Btn} layout="position" transition={{duration: 0.3}}>
                            <div onClick={CookNot}>Отклонить</div>
                            <div onClick={CookApply}>Принять</div>
                        </motion.div>
                    </div>
                </motion.div>
            </LayoutGroup>
        </motion.div>
    );
}