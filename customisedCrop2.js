document.addEventListener('DOMContentLoaded', () => {
    // Pre-fill the current season field based on location or time
    const seasonField = document.getElementById('season');
    const currentMonth = new Date().getMonth() + 1;
    let currentSeason = '';

    // Define the seasons (example for a specific location)
    if (currentMonth >= 3 && currentMonth <= 5) {
        currentSeason = 'Spring';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        currentSeason = 'Summer';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        currentSeason = 'Autumn';
    } else {
        currentSeason = 'Winter';
    }

    seasonField.value = currentSeason;

    // Handle form submissions
    const customerForm = document.getElementById('customerForm');
    const agreementForm = document.getElementById('agreementForm');
    const cropForm = document.getElementById('cropForm');

    customerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Customer details submitted for verification.');
    });

    agreementForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!document.getElementById('agreementCheck').checked) {
            alert('You must agree to the terms and conditions.');
        } else {
            alert('Contract details submitted.');
        }
    });

    cropForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Customized crop request submitted.');
    });
});