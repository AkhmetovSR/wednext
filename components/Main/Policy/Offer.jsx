// components/Legal/UserAgreement.jsx
import React from 'react';
import main from "@/components/Main/Home/Home.module.css";
import s from '@/components/Main/Policy/Policy.module.css';
import m from "@/components/Main/MainStyle.module.css";

const Offer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={main.Main}>
            <div className={m.Cont}>
                <div className={s.Offer}>
                    <header className={s.policyHeader}>
                        <h1 className={s.policyTitle}>Договор публичной оферты</h1>
                        <a href="/Offer.pdf" download target="_blank" rel="noopener noreferrer" className={s.LoadPolicy}>Скачать в PDF</a>
                        <p className={s.policySubtitle}>
                            Для сайта <strong>your-website.com</strong>
                        </p>
                        <p className={s.lastUpdated}>Действует с 1 января {currentYear} года</p>
                    </header>

                    <div className={s.policyContent}>
                        {/* 1. Термины и определения */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>1. Термины и определения</h2>

                            <div className={s.definitionsGrid}>
                                <div className={s.definitionItem}>
                                    <strong>Оферта</strong>
                                    <span>— настоящий документ, размещенный по адресу: your-website.com/offerta.</span>
                                </div>

                                <div className={s.definitionItem}>
                                    <strong>Сайт</strong>
                                    <span>— интернет-сайт, расположенный по адресу: your-website.com.</span>
                                </div>

                                <div className={s.definitionItem}>
                                    <strong>Продавец</strong>
                                    <span>— ИП Ахметова Анжелика Сергеевна; Юридический адрес: 628181, Россия, Ханты-Мансийский автономный округ - Югра, г. Нягань, мкр 4, д 6, кв 39; ИНН: 861004816779; ОГРН/ОГРНИП: 325861700057369</span>
                                </div>

                                <div className={s.definitionItem}>
                                    <strong>Покупатель</strong>
                                    <span>— любое дееспособное физическое или юридическое лицо, принявшее условия настоящей Оферты.</span>
                                </div>

                                <div className={s.definitionItem}>
                                    <strong>Цифровой товар</strong>
                                    <span>— веб-шаблон, цифровой продукт или файл, представленный к продаже на Сайте, который предоставляется Покупателю в электронной форме.</span>
                                </div>

                                <div className={s.definitionItem}>
                                    <strong>Заказ</strong>
                                    <span>— оформленная Покупателем на Сайте заявка на приобретение Цифрового товара.</span>
                                </div>
                            </div>
                        </section>

                        {/* 2. Общие положения */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>2. Общие положения</h2>

                            <div className={s.paragraph}>
                                <strong>2.1.</strong> Настоящий документ является публичной офертой Продавца заключить с
                                Покупателем договор купли-продажи Цифрового товара (далее — «Договор»).
                            </div>

                            <div className={s.paragraph}>
                                <strong>2.2.</strong> Совершение Заказа означает полное и безоговорочное принятие
                                Покупателем всех условий настоящей Оферты (акцепт).
                            </div>

                            <div className={s.paragraph}>
                                <strong>2.3.</strong> Договор считается заключенным с момента успешной оплаты Заказа
                                Покупателем.
                            </div>
                        </section>

                        {/* [slideId]. Порядок оформления заказа и расчетов */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>3. Порядок оформления заказа и расчетов</h2>

                            <div className={s.paragraph}>
                                <strong>3.1.</strong> Цена Цифрового товара указана на Сайте в рублях Российской
                                Федерации.
                            </div>

                            <div className={s.paragraph}>
                                <strong>3.2.</strong> Оплата Заказа производится Покупателем в полном объеме путем 100%
                                предоплаты с использованием банковских карт или иных электронных средств платежа,
                                доступных на Сайте.
                            </div>

                            <div className={s.paragraph}>
                                <strong>3.3.</strong> Моментом оплаты считается поступление денежных средств на
                                расчетный счет Продавца.
                            </div>
                        </section>

                        {/* 4. Передача цифрового товара */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>4. Передача цифрового товара</h2>

                            <div className={s.paragraph}>
                                <strong>4.1.</strong> После подтверждения оплаты Заказа Продавец обязуется в
                                автоматическом режиме предоставить Покупателю ссылку на Цифровой товар.
                            </div>

                            <div className={s.paragraph}>
                                <strong>4.2.</strong> Право использования Цифрового товара (простая неисключительная
                                лицензия) переходит к Покупателю с момента получения ссылки.
                            </div>
                        </section>

                        {/* 5. Возврат товара и денежных средств */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>5. Возврат товара и денежных средств</h2>

                            <div className={s.paragraph}>
                                <strong>5.1.</strong> В соответствии с пунктом 14 статьи 2 Закона Российской Федерации
                                «О защите прав потребителей», <strong>Цифровые товары надлежащего качества, не имеющие
                                материального носителя, возврату и обмену не подлежат.</strong>
                            </div>

                            <div className={s.paragraph}>
                                <strong>5.2.</strong> Возврат денежных средств за Цифровой товар надлежащего качества
                                невозможен после его предоставления Покупателю (отправки ссылки Покупателю).
                            </div>

                            <div className={s.paragraph}>
                                <strong>5.3.</strong> Возврат денежных средств осуществляется в полном объеме в
                                исключительных случаях:
                            </div>
                            <ul className={s.list}>
                                <li className={s.listItem}>Если Покупатель оплатил Заказ, но не получил доступ к
                                    Цифровому товару по технической вине Продавца.
                                </li>
                                <li className={s.listItem}>Если в Цифровом товаре будут обнаружены существенные
                                    недостатки (брак), делающие его использование невозможным, что должно быть
                                    подтверждено Покупателем.
                                </li>
                            </ul>
                        </section>

                        {/* 6. Интеллектуальная собственность и лицензия */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>6. Интеллектуальная собственность и лицензия</h2>

                            <div className={s.paragraph}>
                                <strong>6.1.</strong> Приобретая Цифровой товар, Покупатель получает простую
                                (неисключительную) лицензию на его использование.
                            </div>

                            <div className={s.paragraph}>
                                <strong>6.2.</strong> Условия лицензии (например, для одного проекта, для личного или
                                коммерческого использования) указываются в описании каждого Цифрового товара.
                            </div>

                            <div className={s.paragraph}>
                                <strong>6.3.</strong> Покупатель не вправе перепродавать, тиражировать, распространять
                                исходный код Цифрового товара в качестве шаблона или его производных.
                            </div>

                            <div className={s.paragraph}>
                                <strong>6.5. Запрещается:</strong>
                            </div>
                            <ul className={s.list}>
                                <li className={`${s.listItem} ${s.prohibited}`}> Перепродавать шаблоны в исходном или
                                    модифицированном виде
                                </li>
                                <li className={`${s.listItem} ${s.prohibited}`}> Распространять шаблоны бесплатно или
                                    платно
                                </li>
                                <li className={`${s.listItem} ${s.prohibited}`}> Создавать шаблонные конструкторы на
                                    основе наших продуктов
                                </li>
                                <li className={`${s.listItem} ${s.prohibited}`}> Предоставлять шаблоны по подписке или
                                    в составе других продуктов
                                </li>
                            </ul>
                        </section>

                        {/* 7. Заключительные положения */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>7. Заключительные положения</h2>

                            <div className={s.paragraph}>
                                <strong>7.1.</strong> Продавец вправе в одностороннем порядке изменять условия настоящей
                                Оферты. Новая редакция вступает в силу с момента ее размещения на Сайте.
                            </div>

                            <div className={s.paragraph}>
                                <strong>7.2.</strong> Все споры и разногласия решаются путем переписки. Срок
                                рассмотрения претензии — 30 (тридцать) рабочих дней с момента ее получения.
                            </div>

                            <div className={s.paragraph}>
                                <strong>7.3.</strong> В случае недостижения согласия спор передается на рассмотрение в
                                суд по месту государственной регистрации Продавца.
                            </div>
                        </section>

                        {/* Контактная информация */}
                        <section className={s.policySection}>
                            <h2 className={s.sectionTitle}>Контактная информация</h2>
                            <div className={s.contactInfo}>
                                <p><strong>Индивидуальный предприниматель Ахметова Анжелика Сергеевна</strong></p>
                                <p>ИНН: 861004816779</p>
                                <p>ОГРН/ОГРНИП: 325861700057369</p>
                                <p>Юридический адрес: 628181, Россия, Ханты-Мансийский Автономный округ - Бгра, г. Нягань, мкр 4, д 6, кв 39</p>
                                <p>Email: <a href="mailto:priglasi-online@inbox.ru">priglasi-online@inbox.ru</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;