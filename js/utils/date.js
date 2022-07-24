export function getMonthName(year, month) {
    let selectedDate = new Date(year, month - 1, 1);
    return selectedDate.toLocaleString('default', {month: 'long'});
}

export function getDayName(year, month, day) {
    let selectedDate = new Date(year, month - 1, day);
    return selectedDate.toLocaleDateString('en-US', {weekday: 'long'});
}

export function getDayCount(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
}

export function getDaysArray(selectedYear, selectedMonth, selectedMonthDays) {
    let emptyFieldsCount = 0;
    let emptyFields = [];
    let days = [];

    switch (getDayName(selectedYear, selectedMonth, 1)) {
        case "Tuesday":
            emptyFieldsCount = 1;
            break;
        case "Wednesday":
            emptyFieldsCount = 2;
            break;
        case "Thursday":
            emptyFieldsCount = 3;
            break;
        case "Friday":
            emptyFieldsCount = 4;
            break;
        case "Saturday":
            emptyFieldsCount = 5;
            break;
        case "Sunday":
            emptyFieldsCount = 6;
            break;
    }

    selectedMonthDays = getDayCount(selectedYear, selectedMonth);

    emptyFields = Array(emptyFieldsCount).fill("");
    days = Array.from(Array(selectedMonthDays + 1).keys());
    days.splice(0, 1);

    return emptyFields.concat(days);
}