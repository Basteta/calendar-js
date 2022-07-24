import formSubmit from "../utils/formSubmit.js";

const form = document.getElementById('form-body');

export default function reservationForm(date) {
    const modal = document.getElementById('modal-time');
    const modalForm = document.getElementById('reservation-form');
    const modalFormTitle = document.getElementById('form-title');

    modal.classList.remove('open');
    modalForm.classList.add('open');
    modalFormTitle.innerHTML = new Date(date).toLocaleString('lt-LT', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // form submit
    formSubmit(form, date, modalForm);
}