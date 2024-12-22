function startCountdown() {
	// Définir la date butoir au 31 décembre 2024 à minuit
	const countdownDate = new Date("2024-12-31T00:00:00").getTime();

	function updateCountdown() {
		const now = new Date().getTime();
		const timeLeft = countdownDate - now;

		if (timeLeft >= 0) {
			const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

			document.getElementById("days").textContent = days
				.toString()
				.padStart(2, "0");
			document.getElementById("hours").textContent = hours
				.toString()
				.padStart(2, "0");
			document.getElementById("minutes").textContent = minutes
				.toString()
				.padStart(2, "0");
			document.getElementById("seconds").textContent = seconds
				.toString()
				.padStart(2, "0");
		} else {
			clearInterval(timer);
			document.querySelector(".countdown").innerHTML = "Bonne Année 🎉 !";
		}
	}

	const timer = setInterval(updateCountdown, 1000);
	updateCountdown();
}

startCountdown();
