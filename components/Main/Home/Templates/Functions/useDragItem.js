import { useAnimation} from "framer-motion";
import { SwipeRemove } from "@/components/Main/Home/Templates/Functions/SwipeRemove";
import {useControl} from "@/components/Providers/Context";
import {useCallback, useRef, useState} from "react";

export const useDragItem = (id, listType, setWeddingData, deviceInfo, isReordering) => {
    const { paramN, isE } = useControl();
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);
    const touchStartRef = useRef(null);

    const handleDragEnd = useCallback(
        (e, info) => SwipeRemove(controls, isReordering, id, listType, setWeddingData)(e, info),
        [controls, isReordering, id, listType, setWeddingData]
    );

    const handleDragStart = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleTouchStart = useCallback((e) => {
        if (isReordering || !deviceInfo?.isIOS) return;

        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            time: Date.now()
        };
    }, [isReordering, deviceInfo?.isIOS]);

    const handleTouchEnd = useCallback((e) => {
        if (!touchStartRef.current || isReordering) return;

        const touchEnd = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
            time: Date.now()
        };

        const start = touchStartRef.current;
        const deltaX = Math.abs(touchEnd.x - start.x);
        const deltaY = Math.abs(touchEnd.y - start.y);
        const timeDelta = touchEnd.time - start.time;

        // УВЕЛИЧЕННЫЕ ПОРОГИ ДЛЯ ЛУЧШЕГО РАЗЛИЧЕНИЯ СКРОЛЛА И СВАЙПА
        if (deltaX > 50 && deltaY < 30 && timeDelta < 300) {
            e.preventDefault();
            handleDragEnd(e, { offset: { x: deltaX * (touchEnd.x > start.x ? 1 : -1) } });
        }

        touchStartRef.current = null;
    }, [isReordering, handleDragEnd]);

    return {
        controls,
        isDragging,
        setIsDragging,
        handleDragStart,
        handleDragEnd,
        handleTouchStart,
        handleTouchEnd,
        touchStartRef,
        paramN,
        isE
    };
};