import { motion, useAnimation } from "framer-motion";
import { SwipeRemove } from "@/components/Main/Home/Templates/Functions/SwipeRemove";
import s from "@/components/Main/Home/Templates/Modules/Analytic/Analytic.module.css";

export default function Attention({ isSlideOpen, onClose }) {
    const attentionControls = useAnimation();

    return (
        <motion.div
            className={s.Atten}
            initial={{"--font-scale": isSlideOpen ? 1 : 0.7, x: 0 }}
            animate={attentionControls}
            onTap={onClose}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={0.2}
            onDragEnd={SwipeRemove(attentionControls, false, null, null, null, onClose)}
            style={{
                cursor: "grab",
                touchAction: "pan-x"
            }}
            whileDrag={{ cursor: "grabbing" }}
        >
            <div className={s.Attention}>
                Эта страница доступна только Вам.<br/>Гости ее не увидят.
            </div>
            <button className={s.CloseButton} aria-label="Закрыть">
                ×
            </button>
        </motion.div>
    );
}