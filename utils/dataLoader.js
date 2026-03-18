import load from "@/utils/api/load";
import { handleFetchError } from "@/utils/error";

export const fetchWeddingData = async (nParam, FParam, EParam, setWeddingData, setErr, setIsLoading) => {
    // Если нет параметров, грузим дефолтные данные
    if (!nParam) {
        setIsLoading(false);
        return null;
    }

    // Если параметры есть
    setIsLoading(true); // Показываем страницу загрузки
    setErr(null);       // Очищаем ошибки
    //Запрашиваем данные
    try {
        const response = await load.getAllData(nParam, FParam, EParam);
        if (!response) {
            setErr("Данные не найдены");
            return null;
        }
        return response;
    } catch (error) {
        setErr(handleFetchError(error));
        return null;
    } finally {
        setIsLoading(false);
    }
};