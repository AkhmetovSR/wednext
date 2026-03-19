'use client';
import React from "react";
import main from "@/components/Main/Home/Home.module.css"
import Image from "next/image";
import s from "./Instruction.module.css"

export default function Instruction() {
    return (
        <div className={main.Main}>
            <div className={s.Cont}>
                <h4>Как создать свое онлайн-приглашение на свадьбу</h4>
                <div className={s.ImgInstr}><Image className={s.Img} src="/images/Instr1.webp" alt="Instruction 1" width={290} height={600} loading="eager"/></div>
                <br/>
                <div className={s.ImgInstr}><Image className={s.Img} src="/images/Instr2.webp" alt="Instruction 2" width={290} height={600}/></div>
                <br/>
                <div className={s.ImgInstr}><Image className={s.Img} src="/images/Instr3.webp" alt="Instruction 3" width={290} height={600}/></div>
                <br/>
                <div className={s.ImgInstr}><Image className={s.Img} src="/images/Instr4.webp" alt="Instruction 4" width={290} height={600}/></div>
                <br/>
            </div>
        </div>
    )
};
