const passwordInput = document.querySelector('.password-input')
const passwordButton = document.querySelector('.password-button')
const controlPanel = document.querySelector('.control-panel')
const launchButton = controlPanel.querySelector('.launch')

function checkControlsState() {
    const checkBoxes = controlPanel.querySelectorAll('input[type="checkbox"]')
    if (Array.from(checkBoxes).some(x => !x.checked)) {
        launchButton.disabled = true
        return
    }

    const ranges = controlPanel.querySelectorAll('input[type="range"]')
    if (Array.from(ranges).some(x => x.value !== '100')) {
        launchButton.disabled = true
        return
    }

    launchButton.disabled = false
}

passwordInput.addEventListener('change', () => {
    passwordInput.setCustomValidity('')
})

passwordButton.addEventListener('click', () => {
    // Проверка на заполненность свойства
    if (!passwordInput.reportValidity()) {
        return
    }
    // Проверка на соответствие пароля
    const requiredPassword = 'TrustNo1'
    if (passwordInput.value !== requiredPassword) {
        passwordInput.setCustomValidity('Указан неверный пароль')
        return
    }

    const controlInputs = document.querySelectorAll('input[type="range"], input[type="checkbox"]')
    for (const input of controlInputs) {
        input.disabled = false
        input.onchange = checkControlsState
    }

    passwordInput.disabled = true
    passwordButton.disabled = true
})

launchButton.addEventListener('click', () => {
    const rocket = document.querySelector('.rocket')
    rocket.classList.add('launched')
})