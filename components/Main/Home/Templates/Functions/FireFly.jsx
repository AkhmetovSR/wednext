import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import s from "./FireFly.module.css";

const Firefly = ({ isSlideOpen }) => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer;
        let isMounted = true;

        const animateMovement = async () => {
            if (!isMounted || !isVisible) return;

            const newX = Math.random() * 100;
            const newY = Math.random() * 100;

            try {
                await controls.start({
                    x: `${newX}vw`,
                    y: `${newY}vh`,
                    scale: [1, 0.6, 1, 0.6, 1],
                    opacity: [0.1, 0.8, 0.1],
                    transition: {
                        duration: Math.random() * 4 + 10,
                        ease: "linear",
                    },
                });

                if (isMounted && isVisible) {
                    animateMovement();
                }
            } catch (e) {
                // Игнорируем ошибки
            }
        };

        if (isSlideOpen) {
            setIsVisible(true);
            timer = setTimeout(() => {
                animateMovement();
            }, 1000);
        } else {
            // Плавное исчезновение + полное удаление из DOM
            controls.start({
                opacity: 0,
                transition: { duration: 0.3 }
            }).then(() => {
                if (isMounted) {
                    setIsVisible(false);
                    controls.stop();
                }
            });
        }

        return () => {
            isMounted = false;
            clearTimeout(timer);
            controls.stop();
        };
    }, [isSlideOpen, controls, isVisible]);

    // Полностью удаляем из DOM при isVisible = false
    if (!isVisible) return null;

    return (
        <motion.div
            initial={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0,
                scale: 1
            }}
            animate={controls}
            className={s.Unity}
        />
    );
};

// Fireflies остаётся без изменений

const Fireflies = ({ isSlideOpen }) => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            overflow: "hidden",
            pointerEvents: "none"
        }}>
            {[...Array(10)].map((_, index) => (
                <Firefly key={index} isSlideOpen={isSlideOpen} />
            ))}
        </div>
    );
};

export default Fireflies;

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import s from "./FireFly.module.css";
//
// const Firefly = () => {
//     const controls = useAnimation();
//     const colorVariants = ["#fff3a0", "#f8ffa0", "#feff9c"];
//
//     useEffect(() => {
//         let isMounted = true;
//
//         const animateMovement = async () => {
//             if (!isMounted) return;
//
//             const newX = Math.random() * 100;
//             const newY = Math.random() * 100;
//
//             try {
//                 await controls.start({
//                     x: `${newX}vw`,
//                     y: `${newY}vh`,
//                     scale: [1, 0.6, 1, 0.6, 1],
//                     opacity: [0.8, 0.4, 1],
//                     transition: {
//                         duration: Math.random() * 4 + 20,
//                         ease: "linear",
//                     },
//                 });
//             } catch (e) {
//                 // Игнорируем ошибки анимации при размонтировании
//             }
//
//             if (isMounted) requestAnimationFrame(animateMovement);
//         };
//
//         animateMovement();
//
//         return () => {
//             isMounted = false;
//             controls.stop();
//         };
//     }, [controls]);
//
//     return (
//         <motion.div
//             initial={{
//                 x: `${Math.random() * 100}vw`,
//                 y: `${Math.random() * 100}vh`,
//                 opacity: 0.8,
//                 scale: 1
//             }}
//             animate={controls}
//             className={s.Unity}
//         />
//     );
// };
//
// const Fireflies = () => {
//     return (
//         <div style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 1,
//             overflow: "hidden"
//         }}>
//             {[...Array(10)].map((_, index) => (
//                 <Firefly key={index} />
//             ))}
//         </div>
//     );
// };
//
// export default Fireflies;