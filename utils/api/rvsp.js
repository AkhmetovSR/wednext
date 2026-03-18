import OokieManager from "../cookieManager";
import { config } from '@/utils/api/config';

class rvsp {
    static async guestConfirm(data, setCooId, setErr, setIsLoading) {
        try {
            // const response = await fetch('http://192.168.0.9:89/api/sGuest', {
            const response = await fetch(`${config.BASE_URL}/api/sGuest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
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
            const result = await response.json();
            OokieManager.set("id", result.insertedId)
            setCooId(result.insertedId)
        } catch (error) {
            const message = error.message.startsWith('Failed to fetch')
                ? 'Проблемы с интернетом. Пожалуйста, проверьте соединение и повторите попытку.'
                : error.message;
            setErr([message]);
            // throw error
        }
        finally {
            setIsLoading(false);
        }
    }

    static async updateGuestConfirm(data, setCooId, cookId, setErr, setIsLoading) {
        try {
            // const response = await fetch('http://192.168.0.9:89/api/uGuest', {
            const response = await fetch(`${config.BASE_URL}/api/uGuest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
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
            // const result = await response.json();
            setCooId(cookId);
            // return await result;
        } catch (error) {
            const message = error.message.startsWith('Failed to fetch')
                ? 'Проблемы с интернетом. Пожалуйста, проверьте соединение и повторите попытку.'
                : error.message;
            setErr([message]);
            // throw error
        }
        finally {
            setIsLoading(false);
        }
    }
}
export default rvsp;