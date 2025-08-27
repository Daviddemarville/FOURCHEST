import "./style.css";

//----------------------------------toggle boutton index.html !!!-----------------------------------

document.addEventListener("DOMContentLoaded", () => {
	// Add event listener sur tout les buottons avec comme class "toggle-button"
	document.querySelectorAll(".toggle-button").forEach((button) => {
		button.addEventListener("click", () => {
			const targetId = button.getAttribute("data-target"); // message ID
			const imageId = button.getAttribute("data-image"); // image ID
			const message = document.getElementById(targetId); // trouve le message dans le html
			const image = document.getElementById(imageId); // trouve l'image

			const isSmallScreen = window.innerWidth < 768; // pour le Tailwind's `md` breakpoint 768px

			if (isSmallScreen) {
				if (message.classList.contains("hidden")) {
					message.classList.remove("hidden");
					image.classList.add("hidden");
					button.textContent = "Retour";
				} else {
					message.classList.add("hidden");
					image.classList.remove("hidden");
					button.textContent = "En savoir plus";
				}
			}
		});
	});
});
