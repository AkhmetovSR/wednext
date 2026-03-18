import { config } from '@/utils/api/config';

class save {
    static async saveWM(dataToSave, setErr) {
        try {
            // const response = await fetch('http://192.168.0.9:89/api/sWM', {
            const response = await fetch(`${config.BASE_URL}/api/sWM`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(dataToSave)
            });

            if (!response.ok) {
                try {
                    const errorData = await response.json();
                    // Обрабатываем разные форматы ошибок
                    const messages = errorData.errors
                        ? Object.values(errorData.errors).flat()
                        : errorData.message
                            ? [errorData.message]
                            : ['Неизвестная ошибка сервера'];
                    setErr(messages.filter(Boolean));
                } catch (parseError) {
                    // Если не получилось распарсить JSON
                    setErr([`Ошибка ${response.status}: ${response.statusText}`]);
                    throw parseError;
                }
                return;
            }
            return await response.json();
        } catch (error) {
            console.log(error.message)
            const message = error.message.startsWith('Failed to fetch')
                ? 'Проблемы с интернетом. Пожалуйста, проверьте соединение и повторите попытку.'
                : error.message;
            setErr([message]);
            // throw error
        }
    }

    static async updateWM(dataToSave, setErr) {
        try {
            // const response = await fetch('http://192.168.0.9:89/api/uWM', {
            const response = await fetch(`${config.BASE_URL}/api/uWM`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(dataToSave)
            });

            if (!response.ok) {
                try {
                    const errorData = await response.json();
                    // Обрабатываем разные форматы ошибок
                    const messages = errorData.errors
                        ? Object.values(errorData.errors).flat()
                        : errorData.message
                            ? [errorData.message]
                            : ['Неизвестная ошибка сервера'];

                    setErr(messages.filter(Boolean));
                } catch (parseError) {
                    // Если не получилось распарсить JSON
                    setErr([`Ошибка ${response.status}: ${response.statusText}`]);
                    throw parseError;
                }
                return;
            }
            return await response.json();
        } catch (error) {
            const message = error.message.startsWith('Failed to fetch')
                ? 'Проблемы с интернетом. Пожалуйста, проверьте соединение и повторите попытку.'
                : error.message;
            setErr([message]);
            // throw error
        }
    }

    // static prepareSaveData(state) {
    //     const year = state.date.getFullYear(); // 2025
    //     const month = String(state.date.getMonth() + 1).padStart(2, '0'); // "05"
    //     const day = String(state.date.getDate()).padStart(2, '0'); // "15"
    //     const formattedDate = `${year}-${month}-${day}`; // "2025-05-15"
    //     const url = window.location.href;
    //     console.log("prepare " + state.id)
    //     return {
    //         id: state.id,
    //         wm1: state.newlyWed1,
    //         wm2: state.newlyWed2,
    //         intro: state.intro,
    //         invite: state.invite,
    //         date: formattedDate,
    //         mail: state.mail,
    //         eventList: state.eventList.map(({ time, title, description }) => ({
    //             time,
    //             title,
    //             description
    //         })),
    //         wishList: state.wishList.map(({ text }) => ({
    //             text
    //         })),
    //         uri: url
    //     };
    // }
}
export default save;


//
// // Функция для получения куки
// const getCookie = (name) => {
//     const cookies = document.cookie.split('; ');
//     const cookie = cookies.find((c) => c.startsWith(`${name}=`));
//     return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
// };
//
// // Функция для установки куки
// const setCookie = (name, value, options = {}) => {
//     const { expires, path, domain, secure, sameSite } = options;
//
//     let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
//
//     if (expires) {
//         const date = new MainContent();
//         date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
//         cookie += `; expires=${date.toUTCString()}`;
//     }
//
//     if (path) cookie += `; path=${path}`;
//     if (domain) cookie += `; domain=${domain}`;
//     if (secure) cookie += '; secure';
//     if (sameSite) cookie += `; samesite=${sameSite}`;
//
//     document.cookie = cookie;
// };
//
// // Функция для удаления куки
// const removeCookie = (name, path, domain) => {
//     document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${
//         path ? `; path=${path}` : ''
//     }${domain ? `; domain=${domain}` : ''}`;
// };
//
// const NativeCookieExample = () => {
//     const [theme, setTheme] = useState('light');
//
//     // Проверяем куки при монтировании
//     useEffect(() => {
//         const savedTheme = getCookie('theme');
//         if (savedTheme) {
//             setTheme(savedTheme);
//         }
//     }, []);
//
//     // Обработчик изменения темы
//     const handleThemeChange = (newTheme) => {
//         setTheme(newTheme);
//         setCookie('theme', newTheme, {
//             expires: 7, // 7 дней
//             path: '/',
//             sameSite: 'Strict'
//         });
//     };
//
//     // Обработчик сброса темы
//     const handleResetTheme = () => {
//         removeCookie('theme');
//         setTheme('light');
//     };
//
//     return (
//         <div style={{ padding: '20px', background: theme === 'dark' ? '#333' : '#fff' }}>
//             <h2>CookiePush Management (Native)</h2>
//             <p>Current theme: {theme}</p>
//
//             <button onClick={() => handleThemeChange('dark')}>Set Dark Theme</button>
//             <button onClick={() => handleThemeChange('light')}>Set Light Theme</button>
//             <button onClick={handleResetTheme}>Reset Theme</button>
//
//             <p>Current cookies: {document.cookie || 'none'}</p>
//         </div>
//     );
// };
//
// export default NativeCookieExample;