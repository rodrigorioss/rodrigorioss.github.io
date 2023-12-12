document.addEventListener("DOMContentLoaded", function () {
    const digitContainers = document.querySelectorAll('.digit-container');
    const resetButton = document.getElementById('reset');
    const submitButton = document.getElementById('submit');
    const displayBox = document.getElementById('display-box');
    let phoneNumber = '';

    digitContainers.forEach(container => {
        container.addEventListener('click', function () {
            const digit = this.querySelector('.digit').getAttribute('data-digit');
            phoneNumber += digit;
            displayBox.textContent = phoneNumber;
        });
    });

    resetButton.addEventListener('click', function () {
        phoneNumber = '';
        displayBox.textContent = '';
        console.log('Phone number reset.');
    });

    submitButton.addEventListener('click', function () {
        console.log('Submitting phone number: ' + phoneNumber);
        // Add additional logic for submitting the phone number, if needed
    });
});
