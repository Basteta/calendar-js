export default function formValidation(form, errorNode) {
    Array.from(form.elements).forEach((input, index) => {
        if (index < 2) {
            input.addEventListener('blur', () => {
                input.classList.remove('errorInput');
                errorNode[index].classList.remove('visible');

                if (!input.value) {
                    input.classList.add('errorInput');
                    errorNode[index].classList.add('visible');
                }
            })
        }
    })
}

