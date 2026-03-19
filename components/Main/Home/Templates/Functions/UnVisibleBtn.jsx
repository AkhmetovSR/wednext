import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import s from "@/components/Main/Home/Home.module.css"

export default function UnVisibleBtn({ children, containerRef }) {
    const internalRef = useRef(null);
    const scrollContainerRef = containerRef || internalRef;
    const [hasScroll, setHasScroll] = useState(false);

    // Простая и надежная проверка скролла
    const checkScroll = useCallback(() => {
        if (!scrollContainerRef.current) return;

        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setHasScroll(scrollHeight > clientHeight);
    }, [scrollContainerRef]);

    // Проверяем при монтировании и ресайзе
    useEffect(() => {
        checkScroll();

        const timeoutId = setTimeout(checkScroll, 100); // Небольшая задержка для стабилизации DOM
        return () => clearTimeout(timeoutId);
    }, [checkScroll]);

    // Триггерим проверку при изменении детей
    useEffect(() => {
        checkScroll();
    }, [children, checkScroll]);

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef, // Убедитесь что это ref объект, а не ref.current
        layoutEffect: false
    });

    // Упрощенные трансформы
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
    const pointerEvents = useTransform(opacity, value => value > 0.1 ? 'auto' : 'none');

    const smoothOpacity = useSpring(opacity, {
        stiffness: 300,
        damping: 30
    });

    return (
        <motion.div className={s.UnVisibleBtn} style={{opacity: hasScroll ? smoothOpacity : 1, pointerEvents: hasScroll ? pointerEvents : 'auto'}}>
            {children}
        </motion.div>
    );
}