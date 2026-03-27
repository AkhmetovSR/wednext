import { useRef, useEffect } from "react";
import {Prepare} from "@/components/Main/Home/Templates/Functions/Prepare";

export const useCursorPosition = (value, setValue, limit) => {
    const ref = useRef(null);
    const selection = useRef({ start: 0, end: 0 });

    const handleTextChange = (e) => {
        const newValue = e.target.value;
        selection.current = {
            start: e.target.selectionStart,
            end: e.target.selectionEnd,
        };
        setValue(Prepare(newValue, limit));
    };

    useEffect(() => {
        if (ref.current) {
            const length = value.length;
            ref.current.selectionStart = Math.min(selection.current.start, length);
            ref.current.selectionEnd = Math.min(selection.current.end, length);
        }
    }, [value]);

    return {
        ref,
        value,
        onChange: handleTextChange,
    };
};