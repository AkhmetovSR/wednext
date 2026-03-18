class OokieManager {

    // Установка куки
    static set(name, value) {
        // let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        //
        // // Обработка опций
        // if (options.expires) {
        //     const date = new MainContent();
        //     date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        //     cookie += `; expires=${date.toUTCString()}`;
        // }
        //
        // if (options.path) cookie += `; path=${options.path}`;
        // if (options.domain) cookie += `; domain=${options.domain}`;
        // if (options.secure) cookie += '; secure';
        // if (options.sameSite) cookie += `; samesite=${options.sameSite}`;
        //
        // document.cookie = cookie;
        const options = {
            expires: 182, // 6 месяцев
            path: '/',
            // secure: true,
            sameSite: 'Lax'
        };

        document.cookie =
            `${name}=${encodeURIComponent(value)}` +
            `; expires=${this._getExpirationDate(options.expires)}` +
            `; path=${options.path}` +
            // `; secure` +
            `; samesite=${options.sameSite}`;
    }

    // Получение куки
    static get(name) {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(c => c.startsWith(`${encodeURIComponent(name)}=`));

        if (!cookie) return null;

        const value = cookie.split('=').slice(1).join('=');
        return decodeURIComponent(value);
    }

    // Удаление куки
    static remove(name, path, domain) {
        document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${
            path ? `; path=${path}` : ''
        }${domain ? `; domain=${domain}` : ''}`;
    }

    // Вспомогательный метод для вычисления даты экспирации
    static _getExpirationDate(days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        return date.toUTCString();
    }
}

export default OokieManager;



//Пример использования в компоненте React:
// import React, { useState, useEffect } from 'react';
// import OokieManager from './OokieManager';
//
// const UserPreferences = () => {
//     const [userTheme, setUserTheme] = useState('light');
//
//     // Загрузка сохраненной темы при монтировании
//     useEffect(() => {
//         const savedTheme = OokieManager.get('user_theme');
//         if (savedTheme) {
//             setUserTheme(savedTheme);
//         }
//     }, []);
//
//     // Обновление темы и сохранение в куки
//     const updateTheme = (theme) => {
//         setUserTheme(theme);
//
//         // Вызов записи куки с настройками
//         OokieManager.set('user_theme', theme, {
//             expires: 30, // 30 дней
//             path: '/',
//             sameSite: 'Strict',
//             secure: true
//         });
//     };
//
//     return (
//         <div>
//             <h2>User Preferences</h2>
//             <p>Current theme: {userTheme}</p>
//
//             <button onClick={() => updateTheme('dark')}>Dark Mode</button>
//             <button onClick={() => updateTheme('light')}>Light Mode</button>
//
//             <button onClick={() => {
//                 // Пример удаления куки
//                 OokieManager.remove('user_theme', '/');
//                 setUserTheme('light');
//             }}>
//                 Reset Preferences
//             </button>
//         </div>
//     );
// };
//
// export default UserPreferences;

//Пример использования в других функциях
// Где-то в обработчике авторизации
// const handleLogin = (userData) => {
//     // Запись куки
//     OokieManager.set('auth_token', userData.token, {
//         expires: 1, // 1 день
//         secure: true,
//         sameSite: 'Strict'
//     });
// };
//
// // В API-клиенте
// const apiClient = {
//     getAuthHeader() {
//         const token = OokieManager.get('auth_token');
//         return token ? { 'Authorization': `Bearer ${token}` } : {};
//     }
// };