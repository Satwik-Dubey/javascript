const button = document.getElementById("timer");

function showTime() {
  const currentTime = new Date();
  // console.log(currentTime);
  const timee = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  console.log(timee);
  document.getElementById("time").innerText = timee;
}

// example
// setTimeout(() => console.log("hi"), 5000);

// setinterval
let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});

//  to make a countdown timer like

Assignment:
const userInput = prompt("Enter the number of seconds for the countdown:");

function startCountdown(userInput) {
  let remainingSeconds = userInput;
  const countdown = setInterval(() => {
    if (remainingSeconds > 0) {
      document.getElementById("timer").innerText = remainingSeconds;
      remainingSeconds--;
    } else {
      clearInterval(countdown);
      document.getElementById("timer").innerText = "Time's up!";
    }
  }, 1000);
}

if (userInput > 0) {
  startCountdown(userInput);
} else {
  alert("Please enter a valid number of seconds.");
}
