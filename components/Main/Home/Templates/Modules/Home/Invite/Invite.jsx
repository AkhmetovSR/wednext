import s from "@/components/Main/Home/Templates/Modules/Home/Date/Date.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";

export default function Invite({customClasses, isSlideOpen}) {
    const {weddingData} = useWeddingData();
    const {invite} = weddingData;
    const {openForm} = AddEditForm();

    return (
        <motion.div className={`${s.invite} ${customClasses?.invite || ""}`}
                    initial={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                    animate={{"--font-scale": isSlideOpen ? 1 : 0.6}}
                    onClick={() => {openForm('invite')}}
        >
            {invite}
        </motion.div>
    );
}