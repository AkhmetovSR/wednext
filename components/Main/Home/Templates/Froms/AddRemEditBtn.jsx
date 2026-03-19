import s from "@/components/Main/Home/Templates/Froms/AddRemEditBtn.module.css";
import {motion} from "framer-motion";
import {useCarouselState, usePageContext, useWeddingData} from "@/components/Providers/Context";
import {AddEditForm} from "@/components/Main/Home/Templates/Functions/AddEditForm";

export default function AddRemEditBtn({isSlideOpen}) {
    const {setEventList, setWishList} = useWeddingData();
    const {reorderingStates, setReorderingStates} = useCarouselState();
    const {openForm} = AddEditForm();
    const { activePage } = usePageContext();

    const deleteList = () => {
        if (String(activePage) === "event") {
            setEventList([])
        }
        if (String(activePage) === "wish") {
            setWishList([])
        }
    }
    return (
        <div className={s.AddWish}>
            {isSlideOpen && <motion.div className={s.Sub}>
                {isSlideOpen &&
                    <div className={s.Btns}>
                        <button className={s.DelBtn} onClick={deleteList}>x Удалить все</button>
                        <button
                            className={s.MoveBtn}
                            onClick={() => setReorderingStates(prev => ({
                                ...prev,
                                [activePage]: !prev[activePage]
                            }))}
                            style={{
                                backgroundColor: reorderingStates[activePage] ? '#CEC58E' : '',
                                color: reorderingStates[activePage] ? "white" : ''
                            }}
                        >
                            {reorderingStates[activePage] ? "Сохранить" : "# Переместить"}
                        </button>
                        <button className={s.AddBtn} onClick={() => {
                            openForm(activePage)
                        }}>+ Добавить
                        </button>
                    </div>
                }
            </motion.div>}
        </div>
    );
}