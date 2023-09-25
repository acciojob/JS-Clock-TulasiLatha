// Function to update the clock hands
function updateClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const hours = now.getHours(); // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles for the clock hands
    const hourRotation = 36*hours+minutes/2;
    const minRotation = 6*minutes;
    const secondRotation = 6*seconds;

    // Apply the rotation to the clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock immediately and then every second (1000 milliseconds)
updateClock();
setInterval(updateClock, 1000);
