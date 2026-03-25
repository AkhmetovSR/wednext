import s from "@/components/Main/Home/Templates/Forms/AddRemEditBtn.module.css";
import {motion} from "framer-motion";

export default function AnalyticBtn({
                                        customClasses,
                                        isSlideOpen,
                                        attendingCount,
                                        notAttendingCount,
                                        activeTab,
                                        setActiveTab}) {
    return (
        <div className={s.AddWish}>
            {isSlideOpen && <motion.div className={s.Sub}>
                {isSlideOpen &&
                    <div className={s.Btns}>
                        <button
                            className={`${s.Yes} ${customClasses.Yes || ""}`}
                            onClick={() => setActiveTab('attending')}
                            style={{
                                background: activeTab === 'attending' ? "#CEC58E" : "none",
                                color: activeTab === 'attending' ? "white" : "#CEC58E"
                            }}
                        >
                            ✓ Придут ({attendingCount})
                        </button>
                        <button
                            className={`${s.Not} ${customClasses.Not || ""}`}
                            onClick={() => setActiveTab('notAttending')}
                            style={{
                                background: activeTab === 'notAttending' ? "#CEC58E" : "none",
                                color: activeTab === 'notAttending' ? "white" : "#CEC58E"
                            }}
                        >
                            x Не придут ({notAttendingCount})
                        </button>
                        <button
                            className={`${s.Not} ${customClasses?.Not || ""}`}
                            onClick={() => setActiveTab('drinks')}
                            style={{
                                background: activeTab === 'drinks' ? "#CEC58E" : "none",
                                color: activeTab === 'drinks' ? "white" : "#CEC58E"
                            }}
                        >
                            Напитки
                        </button>
                    </div>
                }
            </motion.div>}
        </div>
    );
};