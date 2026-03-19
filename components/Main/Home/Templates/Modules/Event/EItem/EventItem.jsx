import {motion} from "framer-motion";
import m from "@/components/Main/Home/Home.module.css";
import {useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";
import {RemoveFromList} from "@/components/Main/Home/Templates/Functions/RemoveFromList";
import {TimeFormat} from "@/components/Main/Home/Templates/Functions/TimeFormat";
import {useDragItem} from "@/components/Main/Home/Templates/Functions/useDragItem";
import {useCallback} from "react";

export default function EventItem({id, time, title, description, customClasses, isSlideOpen, deviceInfo, isReordering}) {
    const {setWeddingData} = useWeddingData();
    const {openForm} = AddEditForm();
    const {controls, isDragging, setIsDragging, handleDragStart, handleDragEnd, handleTouchStart, handleTouchEnd,
        touchStartRef, paramN, isE} = useDragItem(id, 'eventList', setWeddingData, deviceInfo, isReordering);

    const handleClick = useCallback(() => {
        if (!isReordering && !isDragging && openForm && (!paramN || isE)) {
            openForm('event', id);
        }
    }, [isReordering, isDragging, openForm, paramN, isE, id]);
    const handleDelete = useCallback(() => {
        RemoveFromList(id, 'eventList', setWeddingData);
    }, [id, setWeddingData]);

    return (
        <motion.div className={`${m.DivEvent} ${customClasses?.DivEvent || ""}`}
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
            <motion.div className={`${m.Time} ${customClasses?.Time || ""}`}
                        initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                        onClick={handleClick}
            >
                {TimeFormat(time)}
            </motion.div>

            <div className={`${m.Event} ${customClasses?.Event || ""}`} onClick={handleClick}>
                <motion.div className={`${m.EventName} ${customClasses?.EventName || ""}`}
                            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                    {title}
                </motion.div>
                <motion.div className={`${m.EventDesc} ${customClasses?.EventDesc || ""}`}
                            initial={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                            animate={{"--font-scale": isSlideOpen ? 1 : 0.7}}
                >
                    {description}
                </motion.div>
            </div>
            {!isReordering && (!paramN || isE) && (
                <motion.button className={`${m.deleteButton} ${customClasses?.deleteButton || ""}`} onClick={handleDelete}>
                    ×
                </motion.button>
            )}
        </motion.div>
    );
}