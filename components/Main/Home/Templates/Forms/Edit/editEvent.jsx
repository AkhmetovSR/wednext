import { motion } from 'framer-motion';
import s from "@/components/Main/Home/Templates/Forms/Edit/editForms.module.css";
import {useErrorState} from "@/components/Providers/Context";

export default function EditEvent({ eventVal, setEventVal}) {
    const {emptyError} = useErrorState();
    return (
            <motion.div className={s.divEditEvent} onClick={(e) => e.stopPropagation()}>
                    <input
                        type="time"
                        className={s.inputTime}
                        value={eventVal.time}
                        onChange={(e) => {setEventVal(prev => ({...prev, time: e.target.value}));}}
                    />
                    <input
                        type="text"
                        value={eventVal.title}
                        onChange={(e) => {setEventVal(prev => ({...prev, title: e.target.value}));}}
                        className={s.inputTitle}
                        maxLength={30}
                        minLength={2}
                        style={{border: emptyError ? "1px solid red" : ""}}
                    />
                    <textarea
                        value={eventVal.description}
                        onChange={(e) => {setEventVal(prev => ({...prev, description: e.target.value}));}}
                        className={s.textDesc}
                        maxLength={600}
                    />
            </motion.div>
    );
}