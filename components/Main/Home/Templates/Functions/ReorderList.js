export const ReorderList = (setWeddingData, listName) => {
    return (newList) => {
        setWeddingData(prev => ({
            ...prev,
            [listName]: newList
        }));
    };
};