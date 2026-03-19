export const TimeFormat = (data) => {
    return data.split(':').slice(0, 2).join(':')
};