// Функция удаления записей в виш листе после свайпа
export const RemoveFromList = (id, listType, setWeddingData) => {
    setWeddingData(prev => ({
        ...prev,
        [listType]: [...prev[listType].filter(item => item.id !== id)]
    }));
};