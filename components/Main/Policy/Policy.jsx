import main from "../Main.module.css";
import s from "./Policy.module.css";
import {usePolicyState} from "../../../Context";
import CookieManager from "../../../OokieManager";
import PolicyText from "./PolicyText";
import CookiePolicy from "./CookiePolicy";

export default function Policy({activeTab, setActiveTab}) {
    const {setPolicyAccepted} = usePolicyState();
    function policyApply() {
        CookieManager.set("policyYes", true);
        setPolicyAccepted(true);
    }
    function policyNot() {
        CookieManager.set("policyYes", false);
        setPolicyAccepted(false);
    }
    const showButtons = activeTab === 'privacy' || activeTab === 'cookies';
        return (
            <div className={main.Main}>
                <div className={s.Policy}>
                    {/* Вкладки вверху */}
                    <div className={s.tabs}>
                        <button className={`${s.tab} ${activeTab === 'privacy' ? s.active : ''}`} onClick={() => setActiveTab('privacy')}>
                            🔒 Конфедициальность
                        </button>
                        <button className={`${s.tab} ${activeTab === 'cookies' ? s.active : ''}`} onClick={() => setActiveTab('cookies')}>
                            🍪 Куки
                        </button>
                    </div>
                    <div className={s.legalContainer}>
                        {activeTab === 'privacy' && <PolicyText setActiveTab={setActiveTab}/>}
                        {activeTab === 'cookies' && <CookiePolicy setActiveTab={setActiveTab}/>}
                    </div>
                        <div className={s.policyRevoke}>
                            {showButtons && (<button className={s.btnRevoke} onClick={policyNot}>Отклонить/Отозвать</button>)}
                            {showButtons && (<button className={s.btnAccept} onClick={policyApply}>Принять</button>)}
                        </div>
                </div>
            </div>
        );
};