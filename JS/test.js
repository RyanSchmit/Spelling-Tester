const playButton = document.getElementById('play-button');
const checkBtn = document.getElementById('check-btn');
let spellingAttempt = document.getElementById("spelt-word");
let nextWord = document.getElementById("next-word");
let words = ['hello', 'goodbye', 'buddy'];
let word;


const utterance = new SpeechSynthesisUtterance();

function newWord() {
	for (var i = 0; i < words.length; i++) {
		if (words[i] === word) {
			words.splice(i, 1);
		}
	}
	word = words[Math.floor(Math.random() * words.length)];
}


function playWord() {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return
  utterance.text = word;
  speechSynthesis.speak(utterance);
}


// Add break and if statement if words is empty
function checkSpelling() {
	if (word == spellingAttempt.value) {
		spellingAttempt.value = '';
		alert("Correct! :)");
		console.log(words);
		newWord();
  } else {
    alert("Incorrect, try again");
	spellingAttempt.value = '';
  }
}

checkBtn.addEventListener('click', checkSpelling)

playButton.addEventListener('click', () => {
	playWord(word)
})

newWord()
