const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;

// Function to format time including milliseconds
const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const millis = String(milliseconds % 1000).padStart(3, "0"); // Milliseconds

  return `${hours}:${minutes}:${seconds}:${millis}`;
};

// Start the stopwatch
const startStopwatch = () => {
  startTime = Date.now() - elapsedTime; // Adjust for resumed time
  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10); // Update every 10ms for better precision

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
};

// Stop the stopwatch
const stopStopwatch = () => {
  clearInterval(timer);
  timer = null;

  startButton.disabled = false;
  stopButton.disabled = true;
};

// Reset the stopwatch
const resetStopwatch = () => {
  clearInterval(timer);
  timer = null;

  elapsedTime = 0;
  display.textContent = "00:00:00:000"; // Reset display including milliseconds

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
};

// Event listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
