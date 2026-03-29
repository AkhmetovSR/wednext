import s from "@/components/Main/MainStyle.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {useParams} from "next/navigation";

export default function Invite({customClasses}) {
    const {weddingData} = useWeddingData();
    const {invite} = weddingData;
    const {openForm} = OpenAddEditForm();

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL

    return (
        <motion.div className={`${s.invite} ${customClasses?.invite || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('invite')}}>
            {invite}
        </motion.div>
    );
}