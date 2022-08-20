
function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getpin()
    }
}
document.getElementById('get-pin').addEventListener('click', function () {
    const typePin = document.getElementById('type-pin').value = getpin();
})

document.getElementById('get-number').addEventListener('click', function (event) {
    const pinNumber = event.target.innerText;
    const displayPin = document.getElementById('display-pin');
    const displayInputValue = displayPin.value;
    if (isNaN(pinNumber)) {
        if (pinNumber == 'C') {
            displayPin.value = '';
        }
    }
    else {
        displayPin.value = displayInputValue + pinNumber
    }
});

document.getElementById('submit-button').addEventListener('click', function () {
    const typePin = document.getElementById('type-pin').value;
    const displayPin = document.getElementById('display-pin').value;

    const getSuccess = document.getElementById('get-success');
    const getError = document.getElementById('getError');
    if (typePin == displayPin) {
        getSuccess.style.display = 'block'
        getError.style.display = 'none'
    }
    else {
        getError.style.display = 'block'
        getSuccess.style.display = 'none'
    }
})