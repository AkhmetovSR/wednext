'use client';
import s from "@/components/Carousel/Carousel.module.css";
import { motion } from "framer-motion";
import React from "react";

// import Template1 from "./Temp/AllTemps/T1/Template1";
// import Template2 from "./Temp/AllTemps/T2/Template2";
// import Temp3 from "./Temp/AllTemps/T3/Temp3";
// import Temp4 from "./Temp/AllTemps/T4/Temp4";
// import Temp5 from "./Temp/AllTemps/T5/Temp5";
// import Temp6 from "./Temp/AllTemps/T6/Temp6";
// import Temp7 from "./Temp/AllTemps/T7/Temp7";
// import FUniverse from "./Temp/Forms/FUniverse";
// import Buy from "./Temp/Modules/BuyForm/Buy";
// import TinkoffPaymentForm from "./Temp/Forms/TinkoffPaymentForm";

// import Temp8 from "./Temp/AllTemps/T8/Temp8";
// import Temp9 from "./Temp/AllTemps/T9/Temp9";
// import Temp10 from "./Temp/AllTemps/T10/Temp10";
// import Temp11 from "./Temp/AllTemps/T11/Temp11";
// import {AddEditForm} from "./Temp/Functions/AddEditForm";
import Swipe from "@/components/Swipe/Swipe";
import {useControl, useCarouselState} from "@/components/Providers/Context";
import { useAddEditForm } from "@/hooks/useAddEditForm";
import Temp3 from "@/components/Main/Home/Templates/Temp/T3/Temp3";

// const tempArr = [
//     { id: 1, div: <Template1 /> },
//     { id: 2, div: <Template2 /> },
//     { id: 3, div: <Temp3 /> },
//     { id: 4, div: <Temp4 /> },
//     { id: 5, div: <Temp5 /> },
//     { id: 6, div: <Temp6 /> },
//     { id: 7, div: <Temp7 /> },
//     { id: 8, div: <Temp8 /> },
//     { id: 9, div: <Temp9 /> },
//     { id: 10, div: <Temp10 /> },
//     { id: 11, div: <Temp11 /> }
// ];
const tempArr = [
    { id: 1, div: "asd" },
    { id: 2, div: "asd" },
    { id: 3, div: <Temp3 /> },
    { id: 4, div: "asd" },
    { id: 5, div: "asd" },
    { id: 6, div: "asd" },
    { id: 7, div: "asd" },
    { id: 8, div: "asd" },
    { id: 9, div: "asd" },
    { id: 10, div: "asd" },
    { id: 11, div: "asd" }
];

export default function Carousel() {
    const {paramN, isE} = useControl();
    const {selectedSlideId, bb, setBb, buy, setBuy} = useCarouselState();
    const { closeForm } = useAddEditForm();
    return (
        <Swipe>
            {tempArr.map((i) => (
                <motion.div data-id={i.id} key={i.id} className={s.Carousel} >
                    {i.div}
                    {selectedSlideId && bb && (!paramN || isE) && (
                        <motion.div className={s.BB}>
                            {/*<FUniverse/>*/}
                            <motion.div className={s.divClose} onTap={closeForm}></motion.div>
                        </motion.div>)}
                    {/*{buy && <Buy setBuy={setBuy}/>}*/}
                </motion.div>
            ))}
        </Swipe>
    );
}