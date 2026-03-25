import {useCarouselState, useControl, useErrorState, useWeddingData} from "@/components/Providers/Context";
import {useEffect, useState} from "react";

export const OpenAddEditForm = () => {
    const { weddingData, setWeddingData, setNewlyWed1, setNewlyWed2, addEvent, updateEvent, addWish, updateWish, setDate} = useWeddingData();
    const {newlyWed1, newlyWed2, intro, invite, eventList, wishList} = weddingData;
    const { setName1Error, setName2Error, setEmptyError} = useErrorState();
    const {paramN, isE} = useControl();
    // Состояния для возврата значений при отмене
    const [copyMW1, setCopyMW1] = useState(newlyWed1);
    const [copyMW2, setCopyMW2] = useState(newlyWed2);
    const {
        selectedSlideId,
        isReordering,
        bb,
        setBb,
        isAddEditE,
        setIsAddEditE,
        isAddEditW,
        setIsAddEditW,
        isEditIntro,
        setIsEditIntro,
        isEditInvite,
        setIsEditInvite,
        isEditWifeMan,
        setIsEditWifeMan,
        isCalendarOpen,
        setIsCalendarOpen,
        elemState,
        setElemState,
        itemList,
        setItemList
    } = useCarouselState();

    useEffect(() => {
        if (bb === false) {
            setIsEditIntro(false);
            setIsEditWifeMan(false);
            setIsEditInvite(false);
            setIsCalendarOpen(false);
            setIsAddEditE(false);
            setIsAddEditW(false);
        }
    }, [bb, setIsAddEditE, setIsAddEditW, setIsCalendarOpen, setIsEditIntro, setIsEditInvite, setIsEditWifeMan]);

    const openForm = (title, id) => {
        console.log("click")
        if ((!paramN || isE) && selectedSlideId) {
            switch (title) {
                case 'intro':
                    setElemState(intro);
                    setBb(true);
                    setIsEditIntro(true);
                    break;
                case 'wm':
                    setBb(true);
                    setIsEditWifeMan(true);
                    break;
                case 'invite':
                    setElemState(invite);
                    setBb(true);
                    setIsEditInvite(true);
                    break;
                case 'calendar':
                    setBb(true);
                    setIsCalendarOpen(true);
                    break;
                case 'event':
                    if (isReordering) return;
                    setBb(true);
                    setItemList(eventList.find(w => w.id === id));
                    setIsAddEditE(true);
                    break;
                case 'wish':
                    if (isReordering) return;
                    setBb(true);
                    setItemList(wishList.find(w => w.id === id));
                    setIsAddEditW(true);
                    break;
            }
        }
    }

    const closeForm = () => {
        if (isEditIntro) {
            setWeddingData(prev => ({ ...prev, intro: elemState }));
            setIsEditIntro(false);
        }
        if (isEditInvite) {
            setWeddingData(prev => ({ ...prev, invite: elemState }));
            setIsEditInvite(false);
        }
        if (isEditWifeMan) {
            setNewlyWed1(copyMW1);
            setNewlyWed2(copyMW2);
            setIsEditWifeMan(false);
        }
        if (isAddEditE) {
            setIsAddEditE(false)
        }
        if (isAddEditW) {
            setIsAddEditW(false);
        }
        setIsCalendarOpen(false)
        setBb(false);
    };

    const saveForm = (eventVal, wishVal, date) => {
        if (isEditIntro) {
            setIsEditIntro(false);
            setBb(false);
        }
        if (isEditInvite) {
            setIsEditInvite(false);
            setBb(false);
        }
        if (isEditWifeMan) {
            const name1Valid = newlyWed1.length >= 1 && newlyWed1.length <= 17;
            const name2Valid = newlyWed2.length >= 1 && newlyWed2.length <= 17;

            if (!name1Valid || !name2Valid) {
                setName1Error(!name1Valid);
                setName2Error(!name2Valid);
                return;
            }
            setName1Error(false);
            setName2Error(false);
            setIsEditWifeMan(false);
            setBb(false);
        }
        if (isAddEditE) {
            if (!eventVal.title) {
                setEmptyError(true);
                return;
            }
            if(itemList?.id) updateEvent(itemList.id, eventVal);
            if(!itemList?.id) addEvent(eventVal);
            setIsAddEditE(false);
            setEmptyError(false);
            setBb(false);
        }
        if (isAddEditW) {
            if(itemList?.id) updateWish(itemList.id, wishVal);
            if(!itemList?.id) addWish(wishVal);
            setIsAddEditW(false);
            setBb(false);
        }
        if(isCalendarOpen){
            setDate(date);
            setIsCalendarOpen(false);
            setBb(false);
        }
    };

    return {openForm, closeForm, saveForm };
};