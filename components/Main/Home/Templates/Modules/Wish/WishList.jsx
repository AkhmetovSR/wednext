import {motion, Reorder} from "framer-motion";
import m from "@/components/Main/MainStyle.module.css";
import WishItem from "@/components/Main/Home/Templates/Modules/Wish/WItem/WishItem";
import {ReorderList} from "@/components/Main/Home/Templates/Functions/ReorderList";
import {UrlParamsContext, useCarouselState, useWeddingData} from "@/components/Providers/Context";
import AddRemEditBtn from "@/components/Main/Home/Templates/Forms/AddRemEditBtn";
import UnVisibleBtn from "@/components/Main/Home/Templates/Functions/UnVisibleBtn";
import NotList from "@/components/Main/Home/Templates/Modules/Help/NotList";
import {HideBtn} from "@/components/Main/Home/Templates/Functions/HideBtn";
import {useContext} from "react";
import {useParams} from "next/navigation";

export default function WishList({customClasses}) {
    const {weddingData, setWeddingData} = useWeddingData();
    const {wishList} = weddingData;
    const params = useParams();
    const slideId = parseInt(params?.slideId);
    const isSlideOpen = !!slideId; // isSlideOpen определяется по наличию slideId в URL
    const {f} = useContext(UrlParamsContext);
    const {reorderingStates} = useCarouselState();
    const isReordering = reorderingStates.wish;
    const handleReorder = ReorderList(setWeddingData, 'wishList');
    const {scrollRef, deviceInfo} = HideBtn(reorderingStates.event, 'wishList');

    return (
        <motion.div className={`${m.HEWRATemp} ${customClasses?.HEWRATemp || ""}`}>
            <motion.div className={`${m.WishFrame} ${customClasses?.WishFrame || ""}`}>
                <motion.div className={`${m.WishTitle} ${customClasses?.WishTitle || ""} ${isSlideOpen ? m.open : m.closed}`}>
                    Доп. инф-я
                </motion.div>
                <motion.div className={`${m.EWRAContent} ${customClasses?.EWRAContent || ""}`}
                            ref={scrollRef}
                            style={isReordering ? {
                                touchAction: 'none',
                                userSelect: 'none',
                                WebkitUserSelect: 'none'
                            } : {}}
                >
                    {(wishList.length === 0) && !f && <NotList customClasses={customClasses}/>}
                    <Reorder.Group as="div"
                                   className={`${m.Wish} ${isReordering ? m.reordering : ''} ${customClasses?.Wish || ""}`}
                                   values={wishList}
                                   onReorder={handleReorder}
                                   axis="y"
                                   initial={{opacity: 0}}
                                   animate={{opacity: 1}}
                                   exit={{opacity: 0}}
                    >
                        {wishList?.map((item) => (
                            <Reorder.Item key={item.id}
                                          value={item}
                                          drag={isReordering}
                                          style={isReordering ? {touchAction: 'none'} : {}}
                            >
                                <WishItem id={item.id}
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