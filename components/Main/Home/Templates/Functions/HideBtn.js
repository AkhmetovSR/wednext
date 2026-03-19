import {useRef} from "react";
import {useScrollLock} from "@/components/Main/Home/Templates/Functions/useScrollLock";

export function HideBtn(reorderingState, listKey) {
    const scrollRef = useRef(null);
    const deviceInfo = useScrollLock(reorderingState, scrollRef);

    return {
        scrollRef,
        deviceInfo
    };
}