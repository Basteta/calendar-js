    import formValidation from './utils/validation.js';
    import {closeModal} from "./components/modals.js";
    import {back} from "./components/modals.js";
    import createCalendar from "./components/createCalendar.js";

    let today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let selectedYear = currentYear;
    let selectedMonth = currentMonth;

    createCalendar(selectedYear, selectedMonth);

    const form = document.getElementById('form-body');
    const errorNode = document.querySelectorAll('.error');
    const modal = document.getElementById('modal-time');
    const modalCloseTrigger = document.querySelectorAll('.modal-close');
    const modalBody = document.getElementById('modal-body');
    const modalForm = document.getElementById('reservation-form');
    const backTrigger = document.querySelector('.modal-back');
    const inputs = modalForm.getElementsByTagName('input');

    //modal
    closeModal(modalCloseTrigger, modal, modalForm, modalBody, inputs);
    back(backTrigger, modal, modalForm, inputs);

    //validation
   formValidation(form, errorNode);