'use client';

import {motion} from "framer-motion";
import {useState} from "react";
import s from "@/components/Main/Home/Templates/Forms/FUniverse.module.css";
import EditIntro from "@/components/Main/Home/Templates/Forms/Edit/editIntro";
import EditInvite from "@/components/Main/Home/Templates/Forms/Edit/editInvite";
import EditWifeMan from "@/components/Main/Home/Templates/Forms/Edit/editWifeMan";
import EditWish from "@/components/Main/Home/Templates/Forms/Edit/editWish";
import Calendar from "@/components/Main/Home/Templates/Forms/Edit/Calendar";
import EditEvent from "@/components/Main/Home/Templates/Forms/Edit/editEvent";
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
            {!isCalendarOpen && <div className={s.EditTitle}>
                <div className={s.Name}>Редактирование...</div>
                <div className={s.Pencil}>✏️</div>
            </div>}
            {isEditIntro && <EditIntro/>}
            {isEditInvite && <EditInvite/>}
            {isEditWifeMan && (<div><EditWifeMan/></div>)}
            {isAddEditE && (<EditEvent eventVal={eventVal} setEventVal={setEventVal}/>)}
            {isAddEditW && (<EditWish wishVal={wishVal} setWishVal={setWishVal}/>)}
            {isCalendarOpen && (<Calendar onClose={() => setIsCalendarOpen(false)}/>)}
            {!isCalendarOpen && (
                <motion.div className={s.divBtn}>
                    <button className={s.btnN} onClick={closeForm}>× Отменить</button>
                    <button className={s.btnY} onClick={() => {
                        saveForm(eventVal, wishVal)
                    }}>✓ Сохранить
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
}