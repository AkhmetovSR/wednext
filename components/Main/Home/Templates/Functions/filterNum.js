//Запрет ввода цифр в input
export const filterNumbers = (inputValue) => {
    return inputValue.replace(/[0-9]/g, '');
};