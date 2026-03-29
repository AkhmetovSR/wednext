import {motion, Reorder} from "framer-motion";
import m from "@/components/Main/MainStyle.module.css";
import EventItem from "@/components/Main/Home/Templates/Modules/Event/EItem/EventItem";
import {ReorderList} from "@/components/Main/Home/Templates/Functions/ReorderList";
import {useCarouselState, UrlParamsContext, useWeddingData} from "@/components/Providers/Context";
import AddRemEditBtn from "@/components/Main/Home/Templates/Forms/AddRemEditBtn";
import UnVisibleBtn from "@/components/Main/Home/Templates/Functions/UnVisibleBtn";
import NotList from "@/components/Main/Home/Templates/Modules/Help/NotList";
import {HideBtn} from "@/components/Main/Home/Templates/Functions/HideBtn";
import {useContext} from "react";
import {useParams} from "next/navigation";

export default function EventList({customClasses}) {
    const {weddingData, setWeddingData} = useWeddingData();
    const {eventList} = weddingData;
    const {f} = useContext(UrlParamsContext);
    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    const {reorderingStates} = useCarouselState();
    const isReordering = reorderingStates.event;
    const handleReorder = ReorderList(setWeddingData, 'eventList');
    const {scrollRef, deviceInfo} = HideBtn(reorderingStates.event, 'eventList');

    return (
        <motion.div className={`${m.HEWRATemp} ${customClasses?.HEWRATemp || ""}`}>
            <motion.div className={`${m.EventFrame} ${customClasses?.EventFrame || ""}`}>
                <motion.div className={`${m.EventTitle} ${customClasses?.EventTitle || ""} ${isSlideOpen ? m.open : m.closed}`}>
                    Программа дня
                </motion.div>
                <motion.div className={`${m.EWRAContent} ${customClasses?.EWRAContent || ""}`}
                            ref={scrollRef}
                            style={isReordering ? {
                                touchAction: 'none',
                                userSelect: 'none',
                                WebkitUserSelect: 'none'
                            } : {}}
                >
                    {(eventList.length === 0 && (!f)) && <NotList customClasses={customClasses} isSlideOpen={isSlideOpen}/>}
                    <Reorder.Group as="div"
                                   className={`${m.Events} ${isReordering ? m.reordering : ''} ${customClasses?.Events || ""}`}
                                   values={eventList}
                                   onReorder={handleReorder}
                                   axis="y"
                                   initial={{opacity: 0}}
                                   animate={{opacity: 1}}
                                   exit={{opacity: 0}}
                    >
                        {eventList.map((item) => (
                            <Reorder.Item key={item.id}
                                          value={item}
                                          drag={isReordering}
                                          style={isReordering ? {touchAction: 'none'} : {}}
                            >
                                <EventItem id={item.id}
                                           {...item}
                                           customClasses={customClasses}
                                           isSlideOpen={isSlideOpen}
                                           deviceInfo={deviceInfo}
                                           isReordering={isReordering}
                                />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </motion.div>
                {(!f) && (
                    <UnVisibleBtn containerRef={scrollRef}>
                        <AddRemEditBtn isSlideOpen={isSlideOpen}/>
                    </UnVisibleBtn>
                )}
            </motion.div>
        </motion.div>
    );
}