'use client';
import s from "@/components/Carousel/Carousel.module.css";
import { motion } from "framer-motion";
import React from "react";
import Swipe from "@/components/Swipe/Swipe";
import { useControl, useCarouselState } from "@/components/Providers/Context";
import { useAddEditForm } from "@/hooks/useAddEditForm";
import { tempArr } from "@/components/Carousel/tempArray";

export default function Carousel() {
    const { paramN, isE } = useControl();
    const { selectedSlideId, bb} = useCarouselState();
    const { closeForm } = useAddEditForm();

    return (
        <Swipe>
            {tempArr.map((i) => (
                <motion.div data-id={i.id} key={i.id} className={s.Carousel} style={{ borderRadius: selectedSlideId ? 0 : 25 }} transition={{ duration: 0.3, delay: 0 }}>
                    {i.div}
                    {selectedSlideId && bb && (!paramN || isE) && (
                        <motion.div className={s.BB}>
                            <motion.div className={s.divClose} onTap={closeForm}></motion.div>
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </Swipe>
    );
}