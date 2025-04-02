document.addEventListener('DOMContentLoaded', function () {

    function validatePasswords() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('passwordMismatchError');

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\\/><.,`;~]).{8,30}$/;

        if (!passwordPattern.test(password)) {
            errorMessage.textContent = "Password must be at least 8 characters, no more than 30 characters, and contain at least one uppercase letter, one number, and one special character.";
            errorMessage.style.display = 'block';
            return false;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match. Please try again.";
            errorMessage.style.display = 'block';
            return false;
        }

        errorMessage.style.display = 'none';
        return true;
    }

    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (e) {
        if (!validatePasswords()) {
            e.preventDefault(); 
        }
    });

    const reviewButton = document.getElementById('reviewButton');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const closePopupBtn = document.getElementById('closePopup');
    const reviewContent = document.getElementById('reviewContent');

    reviewButton.onclick = () => {
        const form = document.getElementById('registrationForm');
        const formData = new FormData(form);
        let reviewHtml = '<ul>';

        formData.forEach((value, key) => {
            reviewHtml += `<li><strong>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</strong>: ${value}</li>`;
        });

        reviewHtml += '</ul>';
        reviewContent.innerHTML = reviewHtml;
        popup.style.display = 'block';
    };

    closeBtn.onclick = () => popup.style.display = 'none';
    closePopupBtn.onclick = () => popup.style.display = 'none';

    
    form.addEventListener('submit', function (e) {
        if (!validatePasswords()) {
            e.preventDefault(); 
        }
    });
});
