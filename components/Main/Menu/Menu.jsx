'use client';
import s from "./Menu.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import TempIcon from "@/public/images/TempIcon.webp";
import InstructionIcon from "@/public/images/InstructionIcon2.webp";
import PolicyIcon from "@/public/images/PolycyIcon.webp";
import OfferIcon from "@/public/images/OfferIcon.webp";
import ContactsIcon from "@/public/images/ContactsIcon.webp";


export default function Menu() {
    const segment = useSelectedLayoutSegment();
    const isActive = (path) => {
        if (path === "/" && !segment) return true;
        return `/${segment}` === path;
    };

    const menuItems = [
        { path: "/", name: "Шаблоны", icon: TempIcon, iconActive: TempIcon },
        { path: "/instruction", name: "Инструкция", icon: InstructionIcon, iconActive: InstructionIcon },
        { path: "/policy", name: "Политика", icon: PolicyIcon, iconActive: PolicyIcon },
        { path: "/offer", name: "Оферта", icon: OfferIcon, iconActive: OfferIcon },
        { path: "/company", name: "Контакты", icon: ContactsIcon, iconActive: ContactsIcon },
    ];

    return (
        <div className={s.M}>
            <motion.nav
                className={s.MenuContainer}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div className={s.Menu}></div>
            </motion.nav>

            <div className={s.divBtn}>
                {menuItems.map((item, index) => {
                    const active = isActive(item.path);
                    return (
                        <motion.div key={item.path} className={`${s.MenuButton} ${active ? s.MenuButtonActive : ''}`}
                                    animate={active ? {
                                        y: [-8, -4, -8],
                                        scale: 1.1,
                                        transition: {y: {duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}, scale: { duration: 0 },}
                                    } : {y: 0, scale: 1, transition: {duration: 0.3}}}
                        >
                            <Link key={item.path} href={item.path}>
                                <motion.div className={s.buttonContent}>
                                    <div className={s.icon}>
                                        <Image src={active ? item.iconActive : item.icon} alt={item.name} className={s.iconImage}/>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}