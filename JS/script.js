let words = [];
const addBtn = document.getElementById("addBtn");

function userInput() {
	const wordInput = document.getElementById("word");
	if (wordInput.value == "") {
		return;
	}
	words.push(wordInput.value)
	const ol = document.getElementById("spellingWords");
	let li = document.createElement('li');
	li.textContent = wordInput.value;
	ol.appendChild(li);
	wordInput.value = '';
}

addBtn.addEventListener('click', userInput)

