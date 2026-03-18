'use client';
import React from "react";
import main from "@/components/Main/Home/Home.module.css"
import s from "./Instruction.module.css"
import Instr1 from "@/public/images/Instr1.webp"
import Instr2 from "@/public/images/Instr2.webp"
import Instr3 from "@/public/images/Instr3.webp"
import Instr4 from "@/public/images/Instr4.webp"

export default function Instruction() {
    return (
        <div className={main.Main}>
            <div className={s.Cont}>
                <h4>Как создать свое онлайн-приглашение на свадьбу</h4>
                <div className={s.ImgInstr}><img className={s.Img} src={Instr1}/></div>
                <br/>
                <div className={s.ImgInstr}><img className={s.Img} src={Instr2}/></div>
                <br/>
                <div className={s.ImgInstr}><img className={s.Img} src={Instr3}/></div>
                <br/>
                <div className={s.ImgInstr}><img className={s.Img} src={Instr4}/></div>
                <br/>
            </div>
        </div>
    )
};
