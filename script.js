function selectPackage(packageId, packageName, packagePrice) {
    // 1. Visually update selected card
    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => card.classList.remove('selected'));

    const selectedCard = cards[packageId - 1]; // Offset index
    selectedCard.classList.add('selected');

    // 2. Set hidden form values
    document.getElementById('selectedPackageID').value = packageId;
    document.getElementById('selectedPackageName').value = packageName;
    document.getElementById('selectedPackagePrice').value = packagePrice;

    // 3. Scroll down slightly to make the form more visible
    window.scrollBy({ top: 300, behavior: 'smooth' });
}

function handleFormSubmit(event) {
    event.preventDefault(); // Stop page from reloading

    const playerID = document.getElementById('playerID').value;
    const packageName = document.getElementById('selectedPackageName').value;
    const packagePrice = document.getElementById('selectedPackagePrice').value;
    const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

    if (!playerID || !packageName || !paymentMethod) {
        alert("Please complete all required fields.");
        return;
    }

    // Since it's for testing, just show a message.
    alert(`Testing Mode: Order Summary:\n` +
          `Player ID: ${playerID}\n` +
          `Selected Package: ${packageName}\n` +
          `Total Price: ${packagePrice} BDT\n` +
          `Payment Method: ${paymentMethod.toUpperCase()}\n\n` +
          `This is a test and no real transaction will occur.`);

    // Reset form after a slight delay
    setTimeout(() => {
        document.getElementById('topupForm').reset();
        const cards = document.querySelectorAll('.package-card');
        cards.forEach(card => card.classList.remove('selected'));
    }, 1000);
}
