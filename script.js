const nameText = "Chidolue Ebube Samuel";
let index = 0;
const speed = 100; // ms per character
const typingEffectElement = document.getElementById("typingName");

function typeWriter() {
	if (index < nameText.length) {
		typingEffectElement.textContent += nameText.charAt(index);
		index++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();
