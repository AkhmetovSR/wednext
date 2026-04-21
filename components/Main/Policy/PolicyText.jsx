// components/Legal/PrivacyPolicy.jsx
'use client';
import React from 'react';
import s from '@/components/Main/Policy/Policy.module.css';
import m from '@/components/Main/MainStyle.module.css';
// import {Link} from "react-router-dom";

const PrivacyPolicy = ({setActiveTab}) => {
    const handleCookiePolicyClick = () => {
        setActiveTab('cookies');
    };
    return (
        <div className={s.policyContainer}>
            <header className={s.policyHeader}>
                <h1 className={m.Title}>Политика в отношении обработки персональных данных</h1>
                <p className={s.lastUpdated}>Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
                <a href="/Policy.pdf" download target="_blank" rel="noopener noreferrer" className={s.LoadPolicy}>Скачать в PDF</a>
            </header>

            <div className={s.policyContent}>
                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>1. Общие положения</h2>
                    <p className={s.paragraph}>
                        <strong>1.1.</strong> Настоящая Политика обработки персональных
                        данных (далее — «Политика»)
                        составлена в соответствии с требованиями Федерального закона от
                        27.07.2006.
                        № 152-ФЗ «О персональных данных» и определяет порядок обработки
                        персональных
                        данных и меры по обеспечению безопасности персональных данных,
                        предпринимаемые
                        владельцем сайта <strong>https://ваш-сайт.ru</strong> (далее —
                        «Оператор»).
                    </p>
                    <p className={s.paragraph}>
                        <strong>1.2.</strong> Оператор ставит своей важнейшей целью и
                        условием осуществления своей
                        деятельности соблюдение прав и свобод человека и гражданина при
                        обработке
                        его персональных данных, в том числе защиты прав на
                        неприкосновенность
                        частной жизни, личную и семейную тайну.
                    </p>
                    <p className={s.paragraph}>
                        <strong>1.3.</strong> Настоящая Политика применяется ко всей
                        информации, которую Оператор
                        может получить о посетителях
                        веб-сайта <strong>https://ваш-сайт.ru</strong>.
                    </p>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>2. Основные понятия, используемые в
                        Политике</h2>
                    <div className={s.definitionsGrid}>
                        <div className={s.definitionItem}>
                            <strong>Автоматизированная обработка персональных
                                данных</strong>
                            <span>— обработка персональных данных с помощью средств вычислительной техники.</span>
                        </div>
                        <div className={s.definitionItem}>
                            <strong>Блокирование персональных данных</strong>
                            <span>— временное прекращение обработки персональных данных.</span>
                        </div>
                        <div className={s.definitionItem}>
                            <strong>Веб-сайт</strong>
                            <span>— совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <strong>https://ваш-сайт.ru</strong>.</span>
                        </div>
                        <div className={s.definitionItem}>
                            <strong>Обработка персональных данных</strong>
                            <span>— любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</span>
                        </div>
                        <div className={s.definitionItem}>
                            <strong>Оператор</strong>
                            <span>— ИП Ахметова Анжелика Сергеевна; Юридический адрес: 628181, Россия, Ханты-Мансийский автономный округ - Югра, г. Нягань, мкр 4, д 6, кв 39; ИНН: 861004816779; ОГРН/ОГРНИП: 325861700057369</span>
                        </div>
                    </div>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>3. Основные права и обязанности
                        Оператора</h2>
                    <p className={s.paragraph}>
                        <strong>3.1. Оператор имеет право:</strong>
                    </p>
                    <ul className={s.list}>
                        <li className={s.listItem}>получать от субъекта персональных данных
                            достоверные информацию и/или документы, содержащие
                            персональные данные;
                        </li>
                        <li className={s.listItem}>в случае отзыва субъектом персональных
                            данных согласия на обработку персональных данных Оператор
                            вправе продолжить обработку персональных данных без согласия
                            субъекта при наличии оснований, указанных в Законе о
                            персональных данных.
                        </li>
                    </ul>
                    <p className={s.paragraph}>
                        <strong>3.2. Оператор обязан:</strong>
                    </p>
                    <ul className={s.list}>
                        <li className={s.listItem}>предоставлять субъекту персональных
                            данных по его просьбе информацию, касающуюся обработки его
                            персональных данных;
                        </li>
                        <li className={s.listItem}>организовывать обработку персональных
                            данных в порядке, установленном действующим
                            законодательством РФ;
                        </li>
                        <li className={s.listItem}>отвечать на обращения и запросы субъектов
                            персональных данных и их законных представителей. Подать обращение
                            {/*или запрос Вы можете в разделе <Link to="/company">"Контакты"</Link>.*/}
                        </li>
                    </ul>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>4. Основные права и обязанности субъектов
                        персональных данных</h2>
                    <p className={s.paragraph}>
                        <strong>4.1. Пользователи имеют право:</strong>
                    </p>
                    <ul className={s.list}>
                        <li className={s.listItem}>на получение информации, касающейся
                            обработки их персональных данных;
                        </li>
                        <li className={s.listItem}>на уточнение, блокирование или
                            уничтожение их персональных данных;
                        </li>
                        <li className={s.listItem}>отозвать свое согласие на обработку
                            персональных данных (кнопка отозвать в левом нижнем углу данной страницы);
                        </li>
                        <li className={s.listItem}>на обжалование действий или бездействия
                            Оператора.
                        </li>
                    </ul>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>5. Цели обработки персональных данных</h2>
                    <div className={s.tableContainer}>
                        <table className={s.dataTable}>
                            <thead>
                            <tr>
                                <th className={s.tableHeader}>Цель обработки</th>
                                <th className={s.tableHeader}>Персональные данные
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={s.tableCell}>Заключение и исполнение
                                    договора
                                </td>
                                <td className={s.tableCell}>ФИО, email, телефон,
                                    адрес доставки, платёжные реквизиты
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div><br/>
                    <div>
                        На сайте НЕ используются инструменты аналитики (например "Яндекс метрика" и другие).
                    </div>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>6. Правовые основания обработки персональных данных</h2>
                    <p className={s.paragraph}>
                        <strong>6.1.</strong> Правовыми основаниями обработки персональных данных Оператором являются:
                    </p>
                    <ul className={s.list}>
                        <li className={s.listItem}>Уставные документы Оператора;</li>
                        <li className={s.listItem}>Согласие Пользователей на обработку их персональных данных;</li>
                        <li className={s.listItem}>Договоры, заключаемые между Оператором и Пользователем.</li>
                    </ul>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>7. Условия обработки персональных данных</h2>
                    <p className={s.paragraph}>
                        <strong>7.1.</strong> Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.
                    </p>
                    <p className={s.paragraph}>
                        <strong>7.2.</strong> Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом.
                    </p>
                    <p className={s.paragraph}>
                        <strong>7.3.</strong> Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных.
                    </p>
                    <p className={s.paragraph}>
                        <strong>7.4.</strong> Обработка обезличенных данных о Пользователях (например, файлов cookie) осуществляется на основании <button
                        className={s.linkButton}
                        onClick={handleCookiePolicyClick}
                    >
                        "Политики использования файлов cookie"
                    </button>
                    </p>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>8. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2>
                    <p className={s.paragraph}>
                        <strong>8.1.</strong> Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.2.</strong> Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.3.</strong> Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае получения согласия субъекта персональных данных.
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.4.</strong> В случае выявления неточностей в персональных данных, Пользователь может
                        актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной
                        почты Оператора <a href="mailto:priglasi-online@inbox.ru?subject=Актуализация персональных данных">priglasi-online@inbox.ru</a> с
                        темой «Актуализация персональных данных».
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.5.</strong> Срок обработки персональных данных определяется достижением целей, для
                        которых были собраны персональные данные, если иной срок не предусмотрен договором или
                        действующим законодательством. Пользователь может в любой момент отозвать свое согласие на
                        обработку персональных данных, направив Оператору уведомление посредством электронной почты на
                        адрес Оператора <a href="mailto:priglasi-online@inbox.ru?subject=Отзыв согласия на обработку персональных данных">priglasi-online@inbox.ru</a> с
                        пометкой «Отзыв согласия на обработку персональных данных» или нажатием кнопки
                        "Отклонить/отозвать" внизу данной страницы.
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.6.</strong> Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Оператор не несет ответственность за действия третьих лиц.
                    </p>
                    <p className={s.paragraph}>
                        <strong>8.7.</strong> Оператор не осуществляет трансграничную передачу персональных данных на территории иностранных государств.
                    </p>
                </section>

                <section className={s.policySection}>
                    <h2 className={s.sectionTitle}>9. Заключительные положения</h2>
                    <p className={s.paragraph}>
                        <strong>9.1.</strong> Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <a
                        href="mailto:priglasi-online@inbox.ru">priglasi-online@inbox.ru</a>.
                    </p>
                    <p className={s.paragraph}>
                        <strong>9.2.</strong> В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
                    </p>
                    <p className={s.paragraph}>
                        <strong>9.3.</strong> Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу <strong>https://ваш-сайт.ru/policy</strong>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;