// src/utils/errorUtils.js
export const handleFetchError = (error) => {
    if (error.message === 'Failed to fetch') {
        return "Ошибка сети. Проверьте подключение к интернету";
    }
    if (error.message.includes('NetworkError')) {
        return "Проблемы с сетью. Проверьте подключение";
    }
    return error.message || "Ведутся технические работы. Пожалуйста, повторите попытку позже...";
};