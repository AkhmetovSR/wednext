'use client';

import s from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Menu() {
    const pathname = usePathname(); // получаем текущий путь

    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <div className={s.Menu}>
            <Link href="/" className={isActive('/') ? `${s.MenuButton} ${s.MenuButtonActive}` : s.MenuButton}>
                <div className={s.ImgHome}></div>
                <motion.div className={s.BtnName}>Шаблоны</motion.div>
            </Link>

            {/*<Link href="/Instruction" className={isActive('/Instruction') ? `${s.MenuButton} ${s.MenuButtonActive}` : s.MenuButton}>*/}
            {/*    <div className={s.ImgHowMake}></div>*/}
            {/*    <div className={s.BtnName}>Описание</div>*/}
            {/*</Link>*/}

            {/*<Link href="/Policy" className={isActive('/Policy') ? `${s.MenuButton} ${s.MenuButtonActive}` : s.MenuButton}>*/}
            {/*    <div className={s.ImgPolicy}></div>*/}
            {/*    <div className={s.BtnName}>Политика</div>*/}
            {/*</Link>*/}

            {/*<Link href="/Offer" className={isActive('/Offer') ? `${s.MenuButton} ${s.MenuButtonActive}` : s.MenuButton}>*/}
            {/*    <div className={s.ImgOffer}></div>*/}
            {/*    <div className={s.BtnName}>Оферта</div>*/}
            {/*</Link>*/}

            {/*<Link href="/Company" className={isActive('/Company') ? `${s.MenuButton} ${s.MenuButtonActive}` : s.MenuButton}>*/}
            {/*    <div className={s.ImgCompany}></div>*/}
            {/*    <div className={s.BtnName}>Контакты</div>*/}
            {/*</Link>*/}
        </div>
    );
}