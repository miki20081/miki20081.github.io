let discordCopyLink = document.querySelector("#discord-copy-link");

discordCopyLink.addEventListener("click", () => {
	navigator.clipboard.writeText("miki20081#7540");
	discordCopyLink.classList.add("copied");
	setTimeout(() => {
		discordCopyLink.classList.remove("copied");
	}, 100);
});
