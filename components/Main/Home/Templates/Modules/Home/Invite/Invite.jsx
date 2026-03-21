import s from "@/components/Main/MainStyle.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";

export default function Invite({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {invite} = weddingData;
    const {openForm} = AddEditForm();

    return (
        <motion.div className={`${s.invite} ${customClasses?.invite || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('invite')}}>
            {invite}
        </motion.div>
    );
}