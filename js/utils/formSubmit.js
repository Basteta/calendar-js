import {closeModal} from "../components/modals.js";
import {updateReservationFetch} from "./apiClient.js";

export default function formSubmit(form, date, modalForm) {
    const modalSuccess = document.getElementById('success');
    const modalBody = document.getElementById('modal-body');
    const modalCloseTrigger = document.querySelectorAll('.modal-close');
    let errorNode = document.querySelector('.errorMessage');
    let inputs = form.getElementsByTagName('input');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstNameValue = form.firstName.value;
        const lastNameValue = form.lastName.value;
        const selectedTime = date;
        console.log(firstNameValue, lastNameValue, selectedTime);

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        const responseData = await updateReservationFetch(firstNameValue, lastNameValue, selectedTime);

        if (responseData.data) {
            modalSuccess.classList.add('open');
            modalSuccess.querySelector('.firstName').innerHTML = `${firstNameValue}`;
            modalSuccess.querySelector('.lastName').innerHTML = `${lastNameValue}`;
            modalSuccess.querySelector('.data').innerHTML = `${new Date(selectedTime).toLocaleString('lt-LT', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}`;

            modalForm.classList.remove('open');

        } else {
            errorNode.append(`${responseData.errors[0].message}`);
            errorNode.classList.add('visible');
        }
    })

    closeModal(modalCloseTrigger, modalSuccess, modalForm, modalBody, errorNode);
}
