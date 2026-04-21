// components/Legal/CookiePolicy.jsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import s from '@/components/Main/Policy/Policy.module.css';
import m from '@/components/Main/MainStyle.module.css';
// import {Link, useNavigate} from "react-router-dom";
// import CookieManager from "../../../OokieManager";

const CookiePolicy = ({ setActiveTab, isExpanded, CookNot, setIsExpanded }) => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const goToLink = () => {
        if (setIsExpanded) {
            setIsExpanded(false);
        }
        if (CookNot) {
            CookNot();
        }
        router.push('/Policy');
    };

    const handlePrivacyClick = () => {
        if (isExpanded && goToLink) {
            goToLink();
        } else if (setActiveTab) {
            setActiveTab('privacy');
        }
    };
    return (
        <div>
            <header className={s.policyHeader}>
                <h1 className={m.Title}>Политика использования файлов «cookie»</h1>
                <a href="/Cookie.pdf" download target="_blank" rel="noopener noreferrer" className={s.LoadPolicy}>Скачать в PDF</a>
                <p className={s.policySubtitle}>
                    Для сайта <strong>your-website.com</strong>
                </p>
                <p className={s.lastUpdated}>Дата последнего обновления: 1 января {currentYear} года</p>
            </header>

            <div className={s.policyContent}>
                {/* 1. Общие положения */}
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>1. Общие положения</h2>

                    <div className={s.paragraph}>
                        <strong>1.1.</strong> Настоящая Политика использования файлов «cookie» (далее — «Политика»)
                        применяется к данным, собираемым с использованием файлов «cookie» при использовании
                        веб-сайта <strong>your-website.com</strong> (далее — «Сайт»).
                    </div>

                    <div className={s.paragraph}>
                        <strong>1.2.</strong> Файлы «cookie» — это небольшие текстовые файлы, которые веб-сайт
                        сохраняет на вашем компьютере или мобильном устройстве при его посещении.
                    </div>
                </section>

                {/* 2. Используемые файлы «cookie» */}
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>2. Используемые файлы «cookie»</h2>

                    <div className={s.paragraph}>
                        <strong>2.1.</strong> На Сайте используются исключительно технические (обязательные)
                        файлы «cookie».
                    </div>

                    <div className={s.paragraph}>
                        <strong>2.2. Цели использования файлов «cookie»:</strong>
                    </div>
                    <ul className={s.list}>
                        <li className={s.listItem}>Обеспечение корректной работы Сайта и его функций</li>
                        <li className={s.listItem}>Запоминание факта того, что вы уже были проинформированы об использовании файлов «cookie»</li>
                        <li className={s.listItem}>Идентификация пользователя для предотвращения повторной отправки форм</li>
                        <li className={s.listItem}>Обеспечение безопасности при работе с сервисами Сайта</li>
                    </ul>

                    <div className={s.paragraph}>
                        <strong>2.3.</strong> Правовое основание: Использование указанных файлов «cookie»
                        не требует получения вашего предварительного согласия в соответствии с пунктом 2
                        части 1 статьи 6 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»,
                        так как они являются технически необходимыми для надлежащей работы Сайта.
                    </div>

                    <div className={s.paragraph}>
                        <strong>2.4. Перечень и описание файлов «cookie»:</strong>
                    </div>
                    <div>
                        <div>
                            1. Наименование файла «cookie»: CookYes; Категория: обязательный; Назначение: Подтверждение
                            ознакомления с уведомлением (для того, чтобы после согласия пользователем с
                            политикой cookie - информационное окно Cookie повторно не отображалось); Срок хранения: 2
                            месяца
                        </div>
                        <div>
                            2. Наименование файла «cookie»: id; Категория: обязательный; Назначение: Идентифицирует пользователя,
                            отправившего анкету, для предотвращения дублирования; Срок хранения: 2 месяца
                        </div>
                    </div>
                    <div className={s.paragraph}>
                        <strong>2.5. Указанные файлы «cookie» не используются для:</strong>
                    </div>
                    <ul className={s.list}>
                        <li className={`${s.listItem} ${s.prohibited}`}>Сбора информации о ваших предпочтениях или
                            поведении на других сайтах
                        </li>
                        <li className={`${s.listItem} ${s.prohibited}`}>Проведения аналитики и сбора статистики</li>
                        <li className={`${s.listItem} ${s.prohibited}`}>Показа таргетированной рекламы</li>
                        <li className={`${s.listItem} ${s.prohibited}`}>Отслеживания действий пользователя</li>
                    </ul>
                </section>

                {/* [slideId]. Управление файлами «cookie» */}
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>3. Управление файлами «cookie»</h2>

                    <div className={s.paragraph}>
                        <strong>3.1.</strong> Вы можете в любой момент удалить эти файлы «cookie» через
                        настройки вашего браузера. Инструкцию по управлению файлами «cookie» расположена ниже.
                    </div>

                    <div className={s.paragraph}>
                        <strong>3.2.</strong> Помните, что отключение или удаление технических файлов «cookie»
                        может привести к некорректной работе некоторых функций Сайта:
                    </div>
                    <ul className={s.list}>
                        <li className={s.listItem}>Повторный показ информационного уведомления о cookies</li>
                        <li className={s.listItem}>Сбои при отправке форм</li>
                    </ul>

                    <div className={s.paragraph}>
                        <strong>3.3. Инструкции по управлению cookies в популярных браузерах:</strong>
                    </div>
                    <ul className={s.list}>
                        <li className={s.listItem}>
                            <strong>Google Chrome:</strong> Настройки → Конфиденциальность и безопасность → Файлы cookie
                            и другие данные сайтов
                        </li>
                        <li className={s.listItem}>
                            <strong>Mozilla Firefox:</strong> Настройки → Конфиденциальность и защита → Файлы cookie и
                            данные сайтов
                        </li>
                        <li className={s.listItem}>
                            <strong>Safari:</strong> Настройки → Конфиденциальность → Управление данными веб-сайтов
                        </li>
                        <li className={s.listItem}>
                            <strong>Microsoft Edge:</strong> Настройки → Конфиденциальность, поиск и службы → Файлы
                            cookie и данные сайтов
                        </li>
                    </ul>
                </section>

                {/* 4. Изменение Политики */}
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>4. Изменение Политики</h2>

                    <div className={s.paragraph}>
                        <strong>4.1.</strong> ИП Ахметова Анжелика Сергеевна вправе в одностороннем порядке
                        изменять настоящую Политику. Актуальная редакция Политики всегда размещена
                        на Сайте с указанием даты последнего обновления.
                    </div>

                    <div className={s.paragraph}>
                        <strong>4.2.</strong> При существенных изменениях Политики мы разместим
                        уведомление на Сайте и обновим дату последнего изменения.
                    </div>
                </section>

                {/* 5. Контактная информация */}
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>5. Контактная информация</h2>

                    <div className={s.paragraph}>
                        <strong>5.1.</strong> По всем вопросам, связанным с использованием файлов «cookie»,
                        вы можете связаться с нами:
                    </div>

                    <div className={s.contactInfo}>
                        <p><strong>Электронная почта:</strong><a
                            href="mailto:priglasi-online@inbox.ru?subject=Куки">priglasi-online@inbox.ru</a>
                        </p>
                    </div>

                    <div className={s.paragraph}>
                        Настоящая Политика использования файлов «cookie» является неотъемлемой частью &ensp;
                        <button onClick={() => (isExpanded ? goToLink : setActiveTab('privacy'))()} className={s.LoadPolicy}>"Политики конфиденциальности"</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CookiePolicy;