'use client';  // ← Добавьте в начало файла
import main from "../Main.module.css";
import s from "../Policy/Policy.module.css";
import React from "react";

export default function Company({setActiveTab}) {
    return (
        <div className={main.Main}>
            <div className={s.companyContent}>
                <div className={s.companyHeader}>
                    <h3 className={s.companyTitle}>О компании / контакты / реквизиты</h3>
                </div>

                <div className={s.infoGrid}>
                    <div className={s.infoCard}>
                        <h4 className={s.cardTitle}>Реквизиты</h4>
                        <div className={s.cardContent}>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>ИП: </span>
                                <span className={s.infoValue}>Ахметова Анжелика Сергеевна</span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>ИНН: </span>
                                <span className={s.infoValue}>861004816779</span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>ОГРНИП: </span>
                                <span className={s.infoValue}>325861700057369</span>
                            </div>
                        </div>
                    </div>

                    <div className={s.infoCard}>
                        <h4 className={s.cardTitle}>Банковские реквизиты</h4>
                        <div className={s.cardContent}>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>Расчетный счет: </span>
                                <span className={s.infoValue}>40802810800008446034</span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>Банк: </span>
                                <span className={s.infoValue}>АО "ТБанк"</span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>БИК: </span>
                                <span className={s.infoValue}>044525974</span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>Корр. счет: </span>
                                <span className={s.infoValue}>30101810145250000974</span>
                            </div>
                        </div>
                    </div>

                    <div className={s.infoCard}>
                        <h4 className={s.cardTitle}>Контакты</h4>
                        <div className={s.cardContent}>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>Email: </span>
                                <span className={s.infoValue}><a href="mailto:priglasi-online@inbox.ru">priglasi-online@inbox.ru</a></span>
                            </div>
                            <div className={s.infoItem}>
                                <span className={s.infoLabel}>Telegram: </span>
                                <span className={s.infoValue}>@your_telegram</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className={s.footer}>*/}
                    {/*<div className={s.legalLinks}>*/}
                    {/*    <NavLink to="/policy" className={s.links}>*/}
                    {/*        <div className={s.legalLink} onClick={() => {setActiveTab('privacy')}}>Политика конфиденциальности</div>*/}
                    {/*        <div className={s.legalLink} onClick={() => {setActiveTab('agreement')}}>Пользовательское соглашение</div>*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={s.copyright}>*/}
                    {/*    <div>Информация на сайте не является публичной офертой.</div>*/}
                    {/*    <div></div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
;
}