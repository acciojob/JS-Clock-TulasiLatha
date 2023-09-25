//your code here
function updateClock(){
const hourHand = document.getElementById('hand hour-hand');
const minuteHand = document.getElementById('hand min-hand');
const secondHand = document.getElementById('hand second-hand');

let now=new Date();
	let hr=now.getHours();
	let min=now.getMinutes();
	let sec=now.getSeconds();

const hourRotation = (360 / 12) * (hr + min / 60);
            const minuteRotation = (360 / 60) * (min + sec / 60);
            const secondRotation = (360 / 60) * sec;
	
	hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}
updateClock();
setInterval(updateClock, 1000);
