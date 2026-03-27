import {motion} from "framer-motion";
import s from "@/components/Main/Home/Templates/Forms/Edit/editWifeMan.module.css"
import {formatName} from "@/components/Main/Home/Templates/Functions/ChangeName";
import {useErrorState, useWeddingData} from "@/components/Providers/Context";

export default function EditWifeMan() {
    const { weddingData, setNewlyWed1, setNewlyWed2} = useWeddingData();
    const { newlyWed1, newlyWed2 } = weddingData;
    const { name1Error, name2Error} = useErrorState();
    const handleChange1 = (newValue) => {
        setNewlyWed1(formatName(newValue, 17));
    };
    const handleChange2 = (newValue) => {
        setNewlyWed2(formatName(newValue, 17));
    };
    return (
        <div className={s.Inputs}>
            <motion.div><input value={newlyWed1} placeholder="введите имя молодожена"
                               onChange={(e) => handleChange1(e.target.value)}
                               style={{border: name1Error ? "1px solid #fd9696" : ""}}
                               type="text" maxLength="17"
            /></motion.div>
            <motion.div><input value={newlyWed2} placeholder="введите имя молодожена"
                               onChange={(e) => handleChange2(e.target.value)}
                               style={{border: name2Error ? "1px solid red" : ""}}
                               type="text" maxLength="17"
            /></motion.div>
        </div>
    );
}