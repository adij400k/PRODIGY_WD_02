let startTime;
let interval;
let running = false;

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - (startTime ? startTime : 0);
    interval = setInterval(updateDisplay, 1000);
  }
}

function pause() {
  running = false;
  clearInterval(interval);
}

function reset() {
  running = false;
  clearInterval(interval);
  startTime = null;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  document.getElementById(
    "display"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
