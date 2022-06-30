let words = [];

function userInput() {
	const wordInput = document.getElementById("word");
	words.push(wordInput.value)
	const ol = document.getElementById("spellingWords");
	let li = document.createElement('li');
	li.textContent = wordInput.value;
	ol.appendChild(li);
	wordInput.value = '';
}

const addBtn = document.getElementById("addBtn");

if (addBtn) {
	addBtn.addEventListener('click', userInput)
}



