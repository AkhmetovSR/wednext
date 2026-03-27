import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import s from "@/components/Main/Home/Templates/Forms/Edit/Calendar.module.css";
import { useSwipeable } from "react-swipeable";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import { useWeddingData } from "@/components/Providers/Context";

const Calendar = ({ onClose }) => {
    const { date: weddingDate } = useWeddingData(); // Дата свадьбы из контекста
    const [currentDate, setCurrentDate] = useState(weddingDate || new Date());
    const [direction, setDirection] = useState(0);
    const { saveForm, closeForm } = OpenAddEditForm();

    // Обновляем текущий месяц при изменении даты свадьбы
    useEffect(() => {
        if (weddingDate) {
            setCurrentDate(weddingDate);
        }
    }, [weddingDate]);

    const handlePrevMonth = () => {
        setDirection(-1);
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setDirection(1);
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextMonth,
        onSwipedRight: handlePrevMonth,
        trackMouse: true,
        delta: 30
    });

    const getMonthDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        const startDayOfWeek = firstDay.getDay();
        const startOffset = (startDayOfWeek + 6) % 7;

        const days = [];

        for (let i = 0; i < startOffset; i++) {
            days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const handleDateSelect = (date) => {
        if (date) {
            saveForm(null, null, date);
            onClose();
        }
    };

    // Проверяем, является ли дата свадьбы
    const isWeddingDate = (dateToCheck) => {
        if (!weddingDate || !dateToCheck) return false;
        return dateToCheck.toDateString() === weddingDate.toDateString();
    };

    return (
        <motion.div className={s.calendar} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={s.calendarHeader}>
                <button className={s.RLBtn} onClick={handlePrevMonth}>&lt;</button>
                <div className={s.Month}>
                    {currentDate.toLocaleString("default", { month: "long" }).toUpperCase()} {currentDate.getFullYear()}
                </div>
                <button className={s.RLBtn} onClick={handleNextMonth}>&gt;</button>
            </div>

            <div {...swipeHandlers} className={s.swipeArea}>
                <div className={s.weekDays}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                </div>

                <div className={s.calendarGrid}>
                    {getMonthDays().map((dateItem, index) => {
                        if (!dateItem) {
                            return <div key={index} className={`${s.calendarDay} ${s.emptyDay}`}></div>;
                        }

                        const isCurrentMonth = dateItem.getMonth() === currentDate.getMonth();
                        const isWeddingDay = isWeddingDate(dateItem);

                        return (
                            <div
                                key={index}
                                className={`${s.calendarDay} 
                                    ${!isCurrentMonth ? s.otherMonth : ""} 
                                    ${isWeddingDay ? s.selectedDay : ""}
                                `}
                                onClick={() => handleDateSelect(dateItem)}
                            >
                                {dateItem.getDate()}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={s.divClose} onClick={() => { closeForm() }}>
                <button className={s.closeButton}>×</button>
            </div>
        </motion.div>
    );
};

export default Calendar;