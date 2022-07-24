const overlays = document.getElementById('overlays');

export function closeModal(modalCloseTrigger, modal, modalForm, modalBody, inputs) {

    modalCloseTrigger.forEach(elem => {
        close(elem);
    })

    close(overlays);

    function close(elem) {
        elem.addEventListener('click', () => {
            modal.classList.remove('open');
            modalForm.classList.remove('open');
            overlays.classList.remove('visible');

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }

            removeAllChildNodes(modalBody);
        })
    }

    function removeAllChildNodes (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

export function back(backTrigger, modal, modalForm, inputs) {
    backTrigger.addEventListener('click', () => {
        modal.classList.add('open');
        modalForm.classList.remove('open');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    })
}

