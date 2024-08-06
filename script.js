document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');
    confirmationDetails.innerHTML = `
        Thank you for booking your flight, ${name}! <br>
        A confirmation email has been sent to ${email}. <br>
        Departure Date: ${departure} <br>
        Destination: ${destination}
    `;
    confirmationMessage.classList.remove('hidden');
    document.getElementById('bookingForm').classList.add('hidden');
});
