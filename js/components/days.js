import {selectedDayFetch} from "../utils/apiClient.js";

let today = new Date();

let currentMonth = today.getMonth() + 1;
let currentDay = today.getDate();
let currentYear = today.getFullYear();

let dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function days (getDays, year, month, calendarBody ) {

    const modal = document.getElementById('modal-time');
    const overlays = document.getElementById('overlays');
    const modalBody = document.getElementById('modal-body');

    dayNames.forEach((dayNumber) => {
        let dayNode = document.createElement("div");
        dayNode.className = "calendar-day-title unselectable";
        dayNode.append(dayNumber);
        calendarBody.append(dayNode);
    });

    getDays.forEach((dayNumber) => {
        let dayNode = document.createElement("div");
        dayNode.className = "calendar-day modal-trigger";
        dayNode.setAttribute('data-trigger', dayNumber)
        dayNode.append(dayNumber);
        calendarBody.append(dayNode);
        if (year === currentYear && month === currentMonth) {
            dayNode.className = "current-month calendar-day modal-trigger";
        }
        if (year === currentYear && month === currentMonth && dayNumber === currentDay) {
            dayNode.className = "current-day calendar-day modal-trigger";
        }

        dayNode.addEventListener('click', () =>{
            let popupTrigger = dayNumber;
            modal.classList.add('open');
            overlays.classList.add('visible');
            selectedDayFetch(modalBody, year, month, popupTrigger);
        })
    });
}