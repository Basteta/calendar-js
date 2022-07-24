import {getDayCount, getMonthName} from "../utils/date.js";

export function goToPrevMonth(selectedYear, selectedMonth) {
    selectedMonth--;
    if (selectedMonth === 0) {
        selectedMonth = 12;
        selectedYear--;
    }
    let selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    let selectedMonthName = getMonthName(selectedYear, selectedMonth);

    return {selectedYear, selectedMonth, selectedMonthName, selectedMonthDays};
}

export function goToNextMonth(selectedYear, selectedMonth) {
    selectedMonth++;
    if (selectedMonth === 13) {
        selectedMonth = 1;
        selectedYear++;
    }
    let selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    let selectedMonthName = getMonthName(selectedYear, selectedMonth);

    return {selectedYear, selectedMonth, selectedMonthName, selectedMonthDays};
}