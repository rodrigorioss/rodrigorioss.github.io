document.addEventListener("DOMContentLoaded", function () {
    const digitContainers = document.querySelectorAll('.digit-container');
    const resetButton = document.getElementById('reset');
    const submitButton = document.getElementById('submit');
    let phoneNumber = '';

    digitContainers.forEach(container => {
        container.addEventListener('click', function () {
            const digit = this.querySelector('.digit').getAttribute('data-digit');
            phoneNumber += digit;
            // You can update an input field or display the selected digits as needed
            console.log('Selected digits: ' + phoneNumber);
        });
    });

    resetButton.addEventListener('click', function () {
        phoneNumber = '';
        // You can reset any input field or display here
        console.log('Phone number reset.');
    });

    submitButton.addEventListener('click', function () {
        // You can perform actions with the collected phone number on submit
        console.log('Submitting phone number: ' + phoneNumber);
    });
});
