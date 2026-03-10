const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export function isDevelopment() {
    if (process.env.NODE_ENV === undefined) {
        return false;
    }

    return process.env.NODE_ENV.toLowerCase() === 'development';
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}