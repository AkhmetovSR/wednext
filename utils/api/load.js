import { config } from '@/utils/api/config';
class Load {
    static async getAllData(paramN, FParam, EParam) {
        if (!paramN) return null;

        const req = {
            method: "GET",
            headers: {'id': paramN, 'isF': FParam, 'isE': EParam},
        };

        try {
            // const response = await fetch("http://192.168.0.104:89/api/gWM", req);
            const response = await fetch(`${config.BASE_URL}/api/gWM`, req);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                // throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                throw new Error(errorData.message || `Ведутся технические работы. Пожалуйста, повторите попытку позже...`);
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default Load;