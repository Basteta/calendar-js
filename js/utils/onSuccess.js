import reservationForm from "../components/reservationForm.js";

export default function onSuccess (result) {
    const dataTime = result.data.reservations;
    dataTime.forEach((item) => {
        let containerNode = document.createElement('li');
        let timeNode = document.createElement('div');
        timeNode.append(new Date(item.date).toLocaleString('lt-LT', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }));
        let buttonContainerNode = document.createElement('div');
        buttonContainerNode.classList.add('wrapper');
        let buttonNode = document.createElement('button');
        if (item.reserved && item.expired) {
            buttonNode.innerHTML = 'reserved';
            buttonNode.className = "action expired";
        } else if (item.reserved) {
            buttonNode.innerHTML = 'reserved';
            buttonNode.className = "action reserved";
        } else if (item.expired) {
            buttonNode.innerHTML = 'expired';
            buttonNode.className = "action expired";
        } else {
            buttonNode.innerHTML = 'select';
            buttonNode.className = "action";
        }
        document.getElementById('modal-body').append(containerNode);
        containerNode.append(timeNode);
        containerNode.append(buttonContainerNode);
        buttonContainerNode.append(buttonNode);

        buttonNode.addEventListener('click', () => {
            reservationForm(item.date);
        })

    });
}