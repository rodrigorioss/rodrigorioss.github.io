document.addEventListener("DOMContentLoaded", function () {
    const digitContainers = document.querySelectorAll('.digit-container');
    const resetButton = document.getElementById('reset');
    const submitButton = document.getElementById('submit');
    const displayBox = document.getElementById('display-box');
    let phoneNumber = '';
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % digitContainers.length;
        updateDisplay();
    }, 1000);

    digitContainers.forEach(container => {
        container.addEventListener('click', function () {
            if (phoneNumber.length < 10) {
                const digit = this.getAttribute('data-digit');
                phoneNumber += digit;
                displayBox.textContent = phoneNumber;
                this.classList.add('rotate');
                setTimeout(() => {
                    this.classList.remove('rotate');
                }, 1000);
            }
        });
    });

    resetButton.addEventListener('click', function () {
        phoneNumber = '';
        displayBox.textContent = '';
        console.log('Phone number reset.');
        updateDisplay();
    });

    submitButton.addEventListener('click', function () {
        console.log('Submitting phone number: ' + phoneNumber);
        phoneNumber = '';
        displayBox.textContent = '';
        updateDisplay();
    });

    function updateDisplay() {
        digitContainers.forEach((container, index) => {
            const digitImage = container.querySelector('.digit');
            digitImage.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
});
