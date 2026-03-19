import {RemoveFromList} from "@/components/Main/Home/Templates/Functions/RemoveFromList";

// Удаление из листа при свайпе
// export const SwipeRemove = (controls, isReordering, id, listType, setWeddingData, threshold = 150) => {
//     return async (event, info) => {
//         if (isReordering) return;
//         const shouldRemove = Math.abs(info.offset.x) > threshold;
//
//         if (shouldRemove) {
//             const direction = info.offset.x > 0 ? 1 : -1;
//             await controls.start({
//                 x: direction * 1000,
//                 opacity: 0,
//                 transition: { duration: 0.2 }
//             });
//             RemoveFromList(id,listType, setWeddingData);
//         } else {
//             await controls.start({
//                 x: 0,
//                 opacity: 1,
//                 transition: { type: "spring", stiffness: 300, damping: 25 }
//             });
//         }
//     };
// };

// SwipeRemove.js
export const SwipeRemove = (controls, isReordering, id, listType, setWeddingData, customAction, threshold = 150) => {
    return async (event, info) => {
        if (isReordering) return;
        const shouldRemove = Math.abs(info.offset.x) > threshold;

        if (shouldRemove) {
            const direction = info.offset.x > 0 ? 1 : -1;
            await controls.start({
                x: direction * 1000,
                opacity: 0,
                transition: { duration: 0.2 }
            });

            if (customAction) {
                customAction(); // кастомное действие
            } else {
                RemoveFromList(id, listType, setWeddingData); // оригинальное действие
            }
        } else {
            await controls.start({
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 25 }
            });
        }
    };
};