import {getDayCount, getDaysArray, getMonthName} from "../utils/date.js";
import {goToNextMonth, goToPrevMonth} from "../utils/goToMonth.js";
import days from "./days.js";

export default function createCalendar(year, month, selectedMonthName, selectedMonthDays) {
    selectedMonthName = getMonthName(year, month);
    selectedMonthDays = getDayCount(year, month);

    let newCalendarNode = document.createElement("div");
    newCalendarNode.id = "calendar";
    newCalendarNode.className = "calendar";

    let calendarHeader = document.createElement("div");
    calendarHeader.className = "calendar-header";
    newCalendarNode.append(calendarHeader);

    let prevMonth = document.createElement("div");
    prevMonth.innerHTML = "&#8249;";
    prevMonth.className = "button_black";
    prevMonth.addEventListener("click", () => {
        let previousMonth = goToPrevMonth(year, month);
        createCalendar(
            previousMonth.selectedYear,
            previousMonth.selectedMonth,
            previousMonth.selectedMonthName,
            previousMonth.selectedMonthDays
        );
    });
    calendarHeader.append(prevMonth);

    let dateText = document.createElement("h3");
    dateText.append(selectedMonthName + ", " + year);
    calendarHeader.append(dateText);

    let nextMonth = document.createElement("div");
    nextMonth.innerHTML = "&#8250;";
    nextMonth.className = "button_black";
    nextMonth.addEventListener("click", () => {
        let nextMonth = goToNextMonth(year, month);
        createCalendar(
            nextMonth.selectedYear,
            nextMonth.selectedMonth,
            nextMonth.selectedMonthName,
            nextMonth.selectedMonthDays
        );
    });
    calendarHeader.append(nextMonth);

    let calendarBody = document.createElement("div");
    calendarBody.className = "calendar-body";
    newCalendarNode.append(calendarBody);

    let getDays = getDaysArray(year, month, selectedMonthDays);

    days(getDays, year, month, calendarBody);

    document.querySelector("#calendar").replaceWith(newCalendarNode);
}