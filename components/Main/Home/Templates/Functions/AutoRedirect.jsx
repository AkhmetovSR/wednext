'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AutoRedirect({ to, delay = 3000, condition = true, resetKey }) {
    const linkRef = useRef(null);
    const redirected = useRef(false);

    // Сбрасываем флаг при изменении resetKey
    useEffect(() => {
        redirected.current = false;
    }, [resetKey]);

    useEffect(() => {
        if (condition && !redirected.current && linkRef.current) {
            redirected.current = true;
            const timer = setTimeout(() => {
                linkRef.current?.click();
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [condition, delay, to, resetKey]);

    return (
        <Link
            href={to}
            ref={linkRef}
            style={{ display: 'none' }}
            aria-hidden="true"
        />
    );
}