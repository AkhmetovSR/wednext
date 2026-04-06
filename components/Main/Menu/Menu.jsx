'use client';
import s from "./Menu.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
    const segment = useSelectedLayoutSegment();
    const isActive = (path) => {
        if (path === "/" && !segment) return true;
        return `/${segment}` === path;
    };

    const menuItems = [
        { path: "/", name: "Шаблоны", icon: "💝", iconActive: "💒" },
        { path: "/Instruction", name: "Инструкция", icon: "📖", iconActive: "💌" },
        { path: "/Policy", name: "Политика", icon: "🔒", iconActive: "💍" },
        { path: "/Offer", name: "Оферта", icon: "📜", iconActive: "✨" },
        { path: "/Company", name: "Контакты", icon: "📞", iconActive: "🌸" },
    ];

    return (
        <motion.nav
            className={s.Menu}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={s.glassBackground}>
                <div className={s.liquidShine}></div>
            </div>

            {menuItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`${s.MenuButton} ${active ? s.MenuButtonActive : ''}`}
                    >
                        <motion.div
                            className={s.buttonContent}
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <motion.div
                                className={s.iconWrapper}
                                animate={{
                                    scale: active ? 1.15 : 1,
                                    rotate: active ? [0, -5, 5, 0] : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className={s.icon}>
                                    {active ? item.iconActive : item.icon}
                                </span>
                            </motion.div>

                            <AnimatePresence mode="wait">
                                {active && (
                                    <motion.div
                                        className={s.BtnName}
                                        initial={{ opacity: 0, width: 0, x: -10 }}
                                        animate={{ opacity: 1, width: 'auto', x: 0 }}
                                        exit={{ opacity: 0, width: 0, x: -10 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        {item.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {active && (
                                <motion.div
                                    className={s.activeIndicator}
                                    layoutId="activeIndicator"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </motion.div>
                    </Link>
                );
            })}

            {/* Декоративные цветочки */}
            <div className={s.decorativeFlower1}>🌸</div>
            <div className={s.decorativeFlower2}>💐</div>
            <div className={s.decorativeFlower3}>🌷</div>
        </motion.nav>
    );
}