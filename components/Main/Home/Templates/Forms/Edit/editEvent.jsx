import { motion } from 'framer-motion';
import s from "@/components/Main/Home/Templates/Forms/Edit/editEvent.module.css";
// import {TextLimit} from "../../Functions/TextLimit";
import {useErrorState} from "@/components/Providers/Context";

export default function EditEvent({ eventVal, setEventVal}) {
    const {emptyError} = useErrorState();
    return (
            <motion.div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={s.Name}>Редактировать событие</div>
                {/*<label className={s.Label}>*/}
                {/*    Время*/}
                    <input
                        type="time"
                        className={s.inputTime}
                        value={eventVal.time}
                        onChange={(e) => {setEventVal(prev => ({...prev, time: e.target.value}));}}
                    />
                {/*</label>*/}
                {/*<label className={s.Label}>*/}
                {/*    Название*/}
                    <input
                        type="text"
                        value={eventVal.title}
                        onChange={(e) => {setEventVal(prev => ({...prev, title: e.target.value}));}}
                        className={s.inputTitle}
                        maxLength={30}
                        minLength={2}
                        style={{border: emptyError ? "1px solid red" : ""}}
                    />
                {/*</label>*/}
                {/*<label className={s.Label}>*/}
                {/*    Описание*/}
                    <textarea
                        value={eventVal.description}
                        onChange={(e) => {setEventVal(prev => ({...prev, description: e.target.value}));}}
                        className={s.textDesc}
                    />
                {/*</label>*/}
            </motion.div>
    );
}