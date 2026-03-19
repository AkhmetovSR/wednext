import s from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function All({isSlideOpen, customClasses, adultsCount, childrenCount, setAdultsCount, setChildrenCount,}) {
    const [adultNames, setAdultNames] = useState([]);
    const [childNames, setChildNames] = useState([]);

    const handleIncrement = (type) => {
        if (type === "adult") {
            if (adultsCount < 15) {
                setAdultsCount((prev) => prev + 1);
                setAdultNames([...adultNames, ""]);
            }
        } else {
            if (childrenCount < 15) {
                setChildrenCount((prev) => prev + 1);
                setChildNames([...childNames, ""]);
            }
        }
    };
    const handleDecrement = (type) => {
        if (type === "adult") {
            if (adultsCount > 0) {
                setAdultsCount((prev) => prev - 1);
                setAdultNames(adultNames.slice(0, -1));
            }
        } else {
            if (childrenCount > 0) {
                setChildrenCount((prev) => prev - 1);
                setChildNames(childNames.slice(0, -1));
            }
        }
    };
    const handleNameChange = (type, index, value) => {
        if (type === "adult") {
            const newNames = [...adultNames];
            newNames[index] = value;
            setAdultNames(newNames);
        } else {
            const newNames = [...childNames];
            newNames[index] = value;
            setChildNames(newNames);
        }
    };

    return (
            <div>
                <motion.div className={s.Plus} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                     animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>

                    <motion.div className={s.Warn} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                                animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>
                        Внимание! Членам семьи/группы не нужно заполнять
                        анкету, если вы их добавили.
                    </motion.div>
                    <div className={s.WithMe}>Со мной придут</div>
                    <div className={s.YangOld}>
                        <div className={s.divOld}>
                            <motion.div className={s.Old} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>Взрослые:
                            </motion.div>
                            <div className={s.Counter}>
                                <div>
                                    {adultsCount > 0 && (
                                        <button onClick={() => handleDecrement("adult")}>-</button>
                                    )}
                                </div>
                                <div className={s.Count}>
                                    <span>{adultsCount}</span>
                                </div>
                                <div>
                                    {adultsCount < 15 && (
                                        <button onClick={() => handleIncrement("adult")}>+</button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <motion.div className={s.divYang} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                                    animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>
                            <div className={s.Yang}>Дети:</div>
                            <div className={s.Counter}>
                                <div>
                                    {childrenCount > 0 && (
                                        <button onClick={() => handleDecrement("child")}>-</button>
                                    )}
                                </div>
                                <div className={s.Count}>
                                    <span>{childrenCount}</span>
                                </div>
                                <div>
                                    {childrenCount < 15 && (
                                        <button onClick={() => handleIncrement("child")}>+</button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className={s.MyGroup}>Моя группа (0 чел.)</div>
                    {/* Инпуты для взрослых */}
                    {adultNames.length > 0 && (
                        <div className={s.namesContainer}>
                            {/*<div>ФИО взрослых:</div>*/}
                            {adultNames.map((name, index) => (
                                <div key={`adult-${index}`} className={s.nameInput}>
                                    <input
                                        className={s.RSVPFIO}
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            handleNameChange("adult", index, e.target.value)
                                        }
                                        placeholder={`ФИО взрослого`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Инпуты для детей */}
                    {childNames.length > 0 && (
                        <div className={s.namesContainer}>
                            {/*<div>ФИО детей:</div>*/}
                            {childNames.map((name, index) => (
                                <div key={`child-${index}`} className={s.nameInput}>
                                    <input
                                        className={s.RSVPFIO}
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            handleNameChange("child", index, e.target.value)
                                        }
                                        placeholder={`ФИО ребенка`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
    );
}