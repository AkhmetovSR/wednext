"use client";
import React from "react";
import Head from "next/head";
import main from "@/components/Main/Home/Home.module.css";
import s from "./Instruction.module.css";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/Swipe.json";
import {motion} from "framer-motion";
import tapAnimation from "@/public/lottie/tap.json";

export default function Instruction() {
    // JSON-LD для структурированных данных (HowTo)
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Как создать свадебное приглашение онлайн за 4 шага",
        description:
            "Простая инструкция по созданию электронного свадебного приглашения онлайн. Выберите шаблон, заполните данные, настройте программу и оформите заказ.",
        step: [
            {
                "@type": "HowToStep",
                name: "Выберите шаблон",
                text: "Нажмите на понравившийся шаблон, чтобы открыть его.",
            },
            {
                "@type": "HowToStep",
                name: "Заполните данные",
                text: "Нажмите на любой элемент (например, «Жених и Невеста») и внесите нужные имена. Аналогично отредактируйте остальные поля.",
            },
            {
                "@type": "HowToStep",
                name: "Заполните программу дня и дополнительную информацию",
                text: "Перейдите на вкладки «Программа дня» и «Дополнительная информация». Здесь можно добавлять, редактировать, удалять и менять порядок элементов.",
            },
            {
                "@type": "HowToStep",
                name: "Оформите заказ",
                text: "Нажмите кнопку «Заказать» в нижнем меню и следуйте инструкциям.",
            },
        ],
    };

    return (
        <>
            <Head>
                <title>Инструкция: как создать свадебное приглашение онлайн</title>
                <meta
                    name="description"
                    content="Простая инструкция по созданию электронного свадебного приглашения онлайн за 4 шага. Выберите шаблон, заполните данные, оформите заказ и отправьте ссылку гостям. Свадебное пригласительное — легко и быстро."
                />
                <meta
                    name="keywords"
                    content="инструкция, свадебное приглашение, свадебное пригласительное, создать свадебное приглашение, электронное приглашение"
                />
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="Как создать свадебное приглашение онлайн"/>
                <meta
                    property="og:description"
                    content="Пошаговая инструкция для создания красивого электронного свадебного приглашения."
                />
                <meta property="og:type" content="website"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
                    }}
                />
            </Head>

            <div className={main.Main}>
                <div className={s.Cont}>
                        <div className={s.Title}>Инструкция</div>
                        <h1 className={s.InstTitle}>Как создать свадебное приглашение за 4 шага</h1>

                        <ol className={s.StepsList}>
                            <li className={s.Step1}>
                                <span className={s.StepText1}><strong>Выберите шаблон</strong> и нажмите на него, чтобы открыть.</span>
                                <div className={s.Temp}>
                                    <div className={s.T1}></div>
                                    <div className={s.T2}>
                                        <div>« --- »</div>
                                        <Lottie animationData={animationData} loop={true} autoplay={true}
                                                style={{width: '100%'}}/>
                                    </div>
                                    <div className={s.T3}></div>
                                </div>
                            </li>
                            <li className={s.Step}>
                                <span className={s.StepText}><strong>Заполните данные</strong> - нажмите на любой элемент (например, «Жених и Невеста») и внесите имена.</span>
                                <div className={s.TempContent}>
                                    <div className={s.divWm}>
                                        <div className={s.wm}>Жених и Невеста</div>
                                        <div className={s.Lottie}><Lottie animationData={tapAnimation} loop={true}
                                                                          autoplay={true} style={{width: '100%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={s.Step}>
                                <span className={s.StepText}><strong>Перейдите на вкладки</strong> «Программа дня» и «Дополнительная информация» — здесь можно добавлять, редактировать, удалять и менять порядок элементов</span>
                                <div className={s.TempContent}>
                                    <div className={s.divMenu}>
                                        <div className={s.wmMenu}>Жених и Невеста</div>

                                        <div className={s.menu}>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn2}></div>
                                            <div className={s.menuBtn3}></div>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.LottieMenu}><Lottie animationData={tapAnimation} loop={true} autoplay={true} style={{width: '100%'}}/></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={s.Step}>
                                <span className={s.StepText}><strong>Оформите заказ</strong> - нажмите кнопку «Заказать» в нижнем меню и следуйте инструкциям.</span>
                                <div className={s.TempContent}>
                                    <div className={s.divMenu}>
                                        <div className={s.wmMenu}>Жених и Невеста</div>

                                        <div className={s.menu}>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn}></div>
                                            <div className={s.menuBtn4}></div>
                                        </div>
                                    </div>
                                    <div className={s.LottieOrder}><Lottie animationData={tapAnimation} loop={true}
                                                                           autoplay={true} style={{width: '100%'}}/>
                                    </div>

                                </div>
                            </li>
                        </ol>


                    <div className={s.ResultBlock}>
                        <div className={s.ResultTitle}>✅ После оформления заказа вы получите ссылку для гостей — её
                            можно сразу отправить.
                        </div>
                        <p className={s.ResultText}>
                            <br/>
                            ✨ Вы также сможете в любой момент вернуться и внести изменения.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}