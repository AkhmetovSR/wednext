import { useState, useEffect } from 'react';

export function UseCheckLoad(isLoading, err, weddingData) {
    const [allResourcesLoaded, setAllResourcesLoaded] = useState(false);

    useEffect(() => {
        const checkAllResources = async () => {
            if (isLoading || err) return;

            try {
                // Ждем загрузки шрифтов
                await document.fonts.ready;

                // Проверяем загрузку изображений
                const images = Array.from(document.images);
                const imagePromises = images.map(img => {
                    if (img.complete) {
                        return Promise.resolve();
                    } else {
                        return new Promise((resolve) => {
                            img.addEventListener('load', resolve);
                            img.addEventListener('error', resolve);
                        });
                    }
                });

                await Promise.all(imagePromises);

                setTimeout(() => {
                    setAllResourcesLoaded(true);
                }, 100);

            } catch (error) {
                console.warn('Resource loading check failed:', error);
                setAllResourcesLoaded(true);
            }
        };

        if (!isLoading && !err) {
            const timer = setTimeout(checkAllResources, 100);
            return () => clearTimeout(timer);
        }
    }, [isLoading, err, weddingData]);

    return allResourcesLoaded;
}