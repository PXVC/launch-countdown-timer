const countdown = () => {
	let endDay = new Date("February 20, 2022 07:05:54").getTime();
	let now = new Date().getTime();

	let difference = endDay - now;

	let sec = 1000;
	let min = sec * 60;
	let hour = min * 60;
	let day = hour * 24;

	let dayDisplay = Math.floor(difference / day);
	let hourDisplay = Math.floor((difference % day) / hour);
	let minDisplay = Math.floor((difference % hour) / min);
	let secDisplay = Math.floor((difference % min) / sec);

	if (dayDisplay <= 9 && dayDisplay >= 0) {
		dayDisplay = "0" + dayDisplay;
	}

	if (hourDisplay <= 9 && hourDisplay >= 0) {
		hourDisplay = "0" + secDisplay;
	}

	if (minDisplay <= 9 && minDisplay >= 0) {
		minDisplay = "0" + minDisplay;
	}

	if (secDisplay <= 9 && secDisplay >= 0) {
		secDisplay = "0" + secDisplay;
	}

	document.getElementById("day-timer").textContent = dayDisplay;
	document.getElementById("hour-timer").textContent = hourDisplay;
	document.getElementById("minute-timer").textContent = minDisplay;
	document.getElementById("second-timer").textContent = secDisplay;

	if (difference <= 0) {
		clearInterval(countdownInterval);
		document.getElementById("day-timer").textContent = "00";
		document.getElementById("hour-timer").textContent = "00";
		document.getElementById("minute-timer").textContent = "00";
		document.getElementById("second-timer").textContent = "00";
	}
};

let countdownInterval = setInterval(countdown, 1000);
