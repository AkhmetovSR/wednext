import s from "@/components/Main/Home/Templates/Modules/RVSP/AddGuestForm/AddGuestForm.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AddGuestForm({isSlideOpen, setAddGuset, adultsCount, childrenCount, setAdultsCount, setChildrenCount}) {
    const [adultNames, setAdultNames] = useState({id: 1, type: 'ad', name: 'asd'});
    const [childNames, setChildNames] = useState([]);
    console.log(adultNames)
    console.log(childNames)
    const handleIncrement = (type) => {
        if (type === "adult") {
            if (adultsCount < 8) {
                setAdultsCount((prev) => prev + 1);
                setAdultNames([...adultNames, ""]);
            }
        } else {
            if (childrenCount < 8) {
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

    // Функция для сохранения данных
    const handleSave = () => {
        // Создаем массив всех гостей
        const allGuests = [
            ...adultNames.map(name => ({ type: "adult", name })),
            ...childNames.map(name => ({ type: "child", name }))
        ].filter(guest => guest.name.trim() !== ""); // Фильтруем пустые имена

        // Здесь вы можете сделать что-то с массивом allGuests
        console.log("Сохраненные гости:", allGuests);

        // Или передать в родительский компонент, если нужно
        // setGuests(allGuests);

        // Закрываем форму
        setAddGuset(false);
    };

    return (
        <motion.div className={s.AddGuest} initial={{scale: 0.9}} animate={{scale: 1}}>
            <motion.div className={s.Warn} initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}>
                Внимание! Членам семьи/группы не нужно заполнять
                анкету, если вы их добавили.
            </motion.div>
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
            <div className={s.Inputs}>
                {/* Инпуты для взрослых */}
                {adultNames.length > 0 && (
                    <div className={s.namesContainer}>
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
            </div>
            <button className={s.Save} onClick={handleSave}>Сохранить</button>
        </motion.div>
    );
}
