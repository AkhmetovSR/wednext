'use client';
import main from "@/components/Main/Home/Home.module.css";
import m from "@/components/Main/MainStyle.module.css";
import s from "@/components/Main/Policy/Policy.module.css";
import { usePolicyState } from "@/components/Providers/Context";
import CookieManager from "@/hooks/CookieManager";
import PolicyText from "@/components/Main/Policy/PolicyText";
import CookiePolicy from "@/components/Main/Policy/CookiePolicy";
import Head from "next/head";

export default function Policy() {
    const { setPolicyAccepted, activeTab, setActiveTab} = usePolicyState();

    function policyApply() {
        CookieManager.set("policyYes", true);
        setPolicyAccepted(true);
    }

    function policyNot() {
        CookieManager.set("policyYes", false);
        setPolicyAccepted(false);
    }

    const showButtons = activeTab === 'privacy' || activeTab === 'cookies';

    // JSON-LD для SEO
    const privacySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Политика конфиденциальности",
        "description": "Политика обработки персональных данных в сервисе создания свадебных приглашений",
        "mainEntity": {
            "@type": "PrivacyPolicy",
            "name": "Политика конфиденциальности",
            "datePublished": "2024-01-01",
            "dateModified": "2026-04-19"
        }
    };

    return (
        <>
            <Head>
                <title>Политика конфиденциальности | Защита персональных данных</title>
                <meta
                    name="description"
                    content="Политика конфиденциальности сервиса свадебных приглашений. Узнайте, как мы собираем, используем и защищаем ваши персональные данные и данные ваших гостей."
                />
                <meta
                    name="keywords"
                    content="политика конфиденциальности, персональные данные, защита данных, GDPR, 152-ФЗ, cookie, обработка данных"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://вашсайт.ru/policy" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(privacySchema).replace(/</g, "\\u003c"),
                    }}
                />
            </Head>

            <div className={main.Main}>
                <div className={m.Cont}>
                    <div className={s.tabs}>
                        <button
                            className={`${s.tab} ${activeTab === 'privacy' ? s.active : ''}`}
                            onClick={() => setActiveTab('privacy')}
                            aria-label="Политика конфиденциальности"
                        >
                            <span>🔒</span> Конфиденциальность
                        </button>
                        <button
                            className={`${s.tab} ${activeTab === 'cookies' ? s.active : ''}`}
                            onClick={() => setActiveTab('cookies')}
                            aria-label="Политика использования cookie"
                        >
                            <span>🍪</span> Cookie
                        </button>
                    </div>

                    <div className={s.legalContainer}>
                        {activeTab === 'privacy' && <PolicyText setActiveTab={setActiveTab} />}
                        {activeTab === 'cookies' && <CookiePolicy setActiveTab={setActiveTab} />}
                    </div>

                    {showButtons && (
                        <div className={s.policyRevoke}>
                            <button className={s.btnRevoke} onClick={policyNot}>
                                Отклонить / Отозвать
                            </button>
                            <button className={s.btnAccept} onClick={policyApply}>
                                Принять
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}