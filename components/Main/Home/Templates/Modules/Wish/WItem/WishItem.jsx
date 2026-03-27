import {motion} from "framer-motion";
import m from "@/components/Main/MainStyle.module.css";
import {useWeddingData} from "@/components/Providers/Context";
import {OpenAddEditForm} from "@/components/Main/Home/Templates/Functions/openAddEditForm";
import {RemoveFromList} from "@/components/Main/Home/Templates/Functions/RemoveFromList";
import {useDragItem} from "@/components/Main/Home/Templates/Functions/useDragItem";
import {useCallback} from "react";

export default function WishItem({id, text, customClasses, isSlideOpen, deviceInfo, isReordering}) {
    const {setWeddingData} = useWeddingData();
    const {openForm} = OpenAddEditForm();
    const {controls, isDragging, setIsDragging, handleDragStart, handleDragEnd, handleTouchStart, handleTouchEnd,
        touchStartRef, paramN, isE} = useDragItem(id, 'wishList', setWeddingData, deviceInfo, isReordering);

    const handleClick = useCallback(() => {
        if (!isReordering && !isDragging && openForm && (!paramN || isE)) {
            openForm('wish', id);
        }
    }, [isReordering, isDragging, openForm, paramN, isE, id]);
    const handleDelete = useCallback(() => {
        RemoveFromList(id, 'wishList', setWeddingData);
    }, [id, setWeddingData]);

    return (
        <motion.div className={`${m.DivWish} ${customClasses?.DivWish || ""}`}
                    drag={isSlideOpen && !isReordering && (!paramN || isE) ? "x" : false}
                    dragConstraints={{left: 0, right: 0}}
                    dragElastic={0.1}
                    animate={controls}
                    initial={{opacity: 1, x: 0}}
                    style={{
                        cursor: isReordering ? "grabbing" : "grab",
                        WebkitUserDrag: isReordering ? "none" : "element",
                        border: isReordering ? "1px solid red" : ""
                    }}
                    onDragStart={handleDragStart}
                    onDragEnd={(e, info) => {
                        handleDragEnd(e, info);
                        setIsDragging(false);
                    }}
                    onTouchStart={deviceInfo?.isIOS ? handleTouchStart : undefined}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={() => touchStartRef.current = null}
        >
            <motion.div className={`${m.WishDesc} ${customClasses?.WishDesc || ""} ${isSlideOpen ? m.open : m.closed}`} onClick={handleClick}>
                {text}
            </motion.div>
            {!isReordering && (!paramN || isE) && (
                <motion.button className={`${m.deleteButton} ${customClasses?.deleteButton || ""}`} onClick={handleDelete}>
                    ×
                </motion.button>
            )}
        </motion.div>
    );
}