// hooks/useScrollLock.js
import { useEffect, useRef, useMemo } from "react";

// Определяем тип устройства и браузера
const useDeviceCapabilities = () => {
    return useMemo(() => {
        if (typeof window === 'undefined') return { strategy: 'standard' };

        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        const isAndroid = /android/.test(userAgent);

        // Определяем версию Safari для старых устройств
        let safariVersion = 0;
        if (isSafari) {
            const versionMatch = navigator.userAgent.match(/Version\/(\d+)/);
            safariVersion = versionMatch ? parseInt(versionMatch[1]) : 12;
        }

        // Выбираем стратегию
        let strategy = 'standard';
        if (isIOS) {
            strategy = safariVersion < 13 ? 'ios-legacy' : 'ios-modern';
        } else if (isAndroid) {
            strategy = 'android';
        }

        return {
            strategy,
            isIOS,
            isAndroid,
            isSafari,
            safariVersion,
            supportsPassive: (() => {
                let supportsPassive = false;
                try {
                    const opts = Object.defineProperty({}, 'passive', {
                        get: () => { supportsPassive = true; }
                    });
                    window.addEventListener('test', null, opts);
                } catch (e) {}
                return supportsPassive;
            })()
        };
    }, []);
};

export const useScrollLock = (isLocked, containerRef = null) => {
    const scrollPosition = useRef(0);
    const device = useDeviceCapabilities();

    useEffect(() => {
        const container = containerRef?.current || document.body;
        const isBody = container === document.body;

        if (isLocked) {
            // Сохраняем позицию скролла
            scrollPosition.current = window.pageYOffset;
            // Общая блокировка для всех устройств
            container.style.overflow = 'hidden';
            container.style.touchAction = 'none';
            // Особые случаи для iOS
            if (device.isIOS && isBody) {
                if (device.strategy === 'ios-legacy') {
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${scrollPosition.current}px`;
                    document.body.style.width = '100%';
                }
                // Предотвращаем bounce эффект
                document.documentElement.style.overscrollBehavior = 'none';
                document.body.style.overscrollBehavior = 'none';
            }
            // Добавляем обработчики для touch событий на iOS
            if (device.isIOS) {
                const preventDefault = (e) => {
                    if (e.touches.length > 1) return; // Разрешаем zoom
                    e.preventDefault();
                };
                const options = device.supportsPassive ? { passive: false } : false;
                document.addEventListener('touchmove', preventDefault, options);
                return () => {
                    document.removeEventListener('touchmove', preventDefault, options);
                };
            }

        } else {
            // Восстанавливаем скролл
            container.style.overflow = '';
            container.style.touchAction = '';
            if (device.isIOS && isBody) {
                if (device.strategy === 'ios-legacy') {
                    // Восстанавливаем позицию для старых iOS
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                    window.scrollTo(0, scrollPosition.current);
                }
                document.documentElement.style.overscrollBehavior = '';
                document.body.style.overscrollBehavior = '';
            }

            // На iOS иногда нужно "разбудить" скролл
            if (device.isIOS && container.scrollTop === 0) {
                setTimeout(() => {
                    container.scrollTop = 1;
                    setTimeout(() => {
                        container.scrollTop = 0;
                    }, 10);
                }, 50);
            }
        }

        return () => {
            // Cleanup при размонтировании
            if (isLocked) {
                container.style.overflow = '';
                container.style.touchAction = '';
                if (device.isIOS && isBody) {
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                    document.documentElement.style.overscrollBehavior = '';
                    document.body.style.overscrollBehavior = '';
                }
            }
        };
    }, [isLocked, containerRef, device]);

    return device;
};