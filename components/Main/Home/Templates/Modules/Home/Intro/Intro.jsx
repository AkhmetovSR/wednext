import s from "@/components/Main/MainStyle.module.css";
import {motion} from "framer-motion";
import {useWeddingData} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {useParams} from "next/navigation";

export default function Intro({customClasses}) {
    const {weddingData} = useWeddingData();
    const {intro} = weddingData;
    const {openForm} = OpenAddEditForm();

    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL

    return (
        <motion.div className={`${s.intro} ${customClasses?.intro || ""} ${isSlideOpen ? s.open : s.closed}`} onClick={() => {openForm('intro')}}>
            {intro}
        </motion.div>
    );
}