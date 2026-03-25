import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers/Providers';
import main from "@/components/Main/Home/Home.module.css";
import Menu from "@/components/Main/Menu/Menu";
import s from "@/components/Main/Home/Home.module.css";
import BlackBackground from "@/components/Main/Home/Templates/Forms/BlackBackground";
import React from "react";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Свадебное пригласительное",
    description: "\"Создайте красивое свадебное приглашение за 5 минут. ✓ 100+ уникальных дизайнов ✓ Добавление фото и музыки ✓ Тайминг свадьбы ✓ Гостевая книга ✓ Отправка по ссылке. Попробуйте бесплатно!",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
            <div className={main.Main}>
                <div className={main.Content}>
                    {children} {/* ← сюда будут подставляться разные страницы */}
                </div>
                <div className={main.Menu}>
                    <Menu/> {/* НЕ РЕНДЕРИТСЯ! */}
                </div>
                <div className={s.Block}>Для просмотра, пожалуйста <br/>переверните устройство.</div>
                {/* Заглушка! */}
            </div>
        </Providers>
        </body>
        </html>
    );
}
