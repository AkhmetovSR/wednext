'use client';

import {motion} from "framer-motion";
import {useState} from "react";
import s from "@/components/Main/Home/Templates/Forms/FUniverse.module.css";
// import EditInvite from "./Edit/editInvite";
// import EditIntro from "./Edit/editIntro";
import EditWifeMan from "@/components/Main/Home/Templates/Forms/Edit/editWifeMan";
// import EditWish from "./Edit/editWish";
// import Calendar from "./Calendar";
// import EditEvent from "./Edit/editEvent";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {useCarouselState} from "@/components/Providers/Context";

export default function FUniverse() {
    const {
        isAddEditE,
        isAddEditW,
        isEditIntro,
        isEditInvite,
        isEditWifeMan,
        isCalendarOpen,
        setIsCalendarOpen,
        itemList
    } = useCarouselState();
    const { closeForm, saveForm } = OpenAddEditForm(); // Используем функции
    // Mid значения, при отмене редактирования
    const [eventVal, setEventVal] = useState(() => {
        const base = {
            time: itemList?.time || '',
            title: itemList?.title || '',
            description: itemList?.description || ''
        };
        return itemList?.id !== undefined
            ? { ...base, id: itemList.id }
            : base;
    });
    const [wishVal, setWishVal] = useState(() =>{
        const base = {
            text: itemList?.text || ''
        };
        return itemList?.id !== undefined
            ? { ...base, id: itemList.id }
            : base;
    })

    return (
        <motion.div className={s.FU} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {/*{isEditInvite && <EditInvite />}*/}
            {/*{isEditIntro && <EditIntro />}*/}
            {isEditWifeMan && (<div><div className={s.Title}>Введите имена жениха и невесты</div><EditWifeMan/></div>)}
            {/*{isAddEditE && (<EditEvent eventVal={eventVal} setEventVal={setEventVal}/>)}*/}
            {/*{isAddEditW && (<EditWish wishVal={wishVal} setWishVal={setWishVal}/>)}*/}
            {/*{isCalendarOpen && (<Calendar onClose={() => setIsCalendarOpen(false)}/>)}*/}
            {!isCalendarOpen && (
                <motion.div className={s.divBtn}>
                    <button className={s.btnN} onClick={closeForm}>× Отменить</button>
                    <button className={s.btnY} onClick={() => {saveForm(eventVal, wishVal)}}>✓ Сохранить</button>
                </motion.div>
            )}
        </motion.div>
    );
}