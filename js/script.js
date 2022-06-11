document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)
        if (error === 0) {
            for (let i = 0; i < 7; i++) {
                console.log(e.target[i].value)
            }
            form.reset()
        }
        else {
            alert('Необходимо заполнить обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('.req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)

            if (input.value === '') {
                formAddError(input)
                error++
            }
        }
        return error
    }
    function formAddError(input) {
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.classList.remove('_error')
    }
});