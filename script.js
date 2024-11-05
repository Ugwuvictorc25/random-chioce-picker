const textArea = document.querySelector(".textarea");
const tagCont = document.querySelector(".tag");

textArea.focus();
textArea.addEventListener("keyup", function (e) {
	creatTag(e.target.value);

	if (e.key === "Enter" && e.target.value.trim() !== "") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);
		randomSelect();
		textArea.blur();
	}
});

function creatTag(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());
	tagCont.innerHTML = "";

	for (let i = 0; i < tags.length; i++) {
		var tagEl = document.createElement("span");
		tagEl.textContent = tags[i];
		tagCont.appendChild(tagEl);
	}
}

function randomSelect() {
	const time = 30;

	const interval = setInterval(() => {
		const pickedRandomSpan = pickRandom();

		highlightSpan(pickedRandomSpan);

		setTimeout(() => {
			unHighlightSpan(pickedRandomSpan);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const pickedRandomSpan = pickRandom();
			highlightSpan(pickedRandomSpan);
			console.log(234);
		}, 100);
	}, time * 100);
}

function pickRandom() {
	const allSpan = document.querySelectorAll(".tag span");
	return allSpan[Math.floor(Math.random() * allSpan.length)];
}

function highlightSpan(span) {
	span.classList.add("highlight");
}

function unHighlightSpan(span) {
	span.classList.remove("highlight");
}
