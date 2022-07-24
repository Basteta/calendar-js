import onSuccess from "./onSuccess.js";

export function selectedDayFetch (modalBody, selectedYear, selectedMonth, popupTrigger) {
    let loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = 'Loading...';
    modalBody.append(loader);

    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `{
            reservations(date: "${selectedYear} ${selectedMonth} ${popupTrigger}") {
                _id
                date
                reserved
                expired
            }
        }`
        })
    })
        .then((res) => res.json())
        .then((result) => {
            loader.remove();
            onSuccess(result);
        }).catch((err) => {
        loader.innerHTML = err;
        loader.className = 'errorMessage';
    });
}

export async function updateReservationFetch (firstNameValue, lastNameValue, selectedTime) {
    const query = JSON.stringify({
        query: `mutation {
          bookReservation(reservationInput:{
            firstName: "${firstNameValue}",
            lastName: "${lastNameValue}",
            date: "${selectedTime.toString()}"}){
                 _id
                firstName
                lastName
                date
                createdAt
                updatedAt
            }
        }
    `
    });
    const response = await fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: query,
    })

    const responseData = await response.json();

    return responseData;
}