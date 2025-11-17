let numberOfButtons = document.querySelectorAll(".drum");
for (let i = 0; i < numberOfButtons.length; i++) {
  numberOfButtons[i].addEventListener("click", function () {
    let buttonSelect = this.innerHTML;
    playSound(buttonSelect);
    buttonAnimation(buttonSelect);
  });
}

document.addEventListener("keypress", (event) => {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "q":
      let tom1 = new Audio("../Assets_Drum/tom-1.mp3");
      tom1.play();
      break;

    case "w":
      let tom2 = new Audio("../Assets_Drum/tom-2.mp3");
      tom2.play();
      break;

    case "e":
      let tom3 = new Audio("../Assets_Drum/tom-3.mp3");
      tom3.play();
      break;

    case "r":
      let tom4 = new Audio("../Assets_Drum/tom-4.mp3");
      tom4.play();
      break;

    case "i":
      let snare = new Audio("../Assets_Drum/snare.mp3");
      snare.play();
      break;

    case "o":
      let crash = new Audio("../Assets_Drum/crash.mp3");
      crash.play();
      break;

    case "p":
      let kick = new Audio("../Assets_Drum/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let buttonAnimateSelect = document.querySelector("." + currentKey);
  buttonAnimateSelect.classList.add("pressed");

  setTimeout(function () {
    buttonAnimateSelect.classList.remove("pressed");
  }, 100);
}
