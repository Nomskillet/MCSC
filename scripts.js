document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submit-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        // You can add your email submission logic here, e.g., sending an email via a service.
        alert(`Thank you for submitting your email: ${email}`);
    });
});
