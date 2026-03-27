export const Prepare = (inputValue, limit) => {
    return inputValue
        .substring(0, limit)
        .toUpperCase();
};