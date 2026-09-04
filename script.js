const plantBtn = document.getElementById("plantBtn");
const waterBtn = document.getElementById("waterBtn");
const axeBtn = document.getElementById("axeBtn");
const pickaxeBtn = document.getElementById("pickaxeBtn");

let selectedTool = false;

const task = document.getElementById("task");
plantBtn.addEventListener("click", function() {
    task.textContent = "Plant something today! 🌱";
    selectedTool = true;

});

waterBtn.addEventListener("click", function() {
    task.textContent = "Water your plants! 💧";
    selectedTool = true;

});

axeBtn.addEventListener("click", function() {
    task.textContent = "Cut down a tree! 🪓";
    selectedTool = true;

});

pickaxeBtn.addEventListener("click", function() {
    task.textContent = "Mine some resources! ⛏️";
    selectedTool = true;
});

completeBtn.addEventListener("click", function() {
    if (selectedTool === true) {
        task.textContent = "Task completed! 🌟";
    } else {
        task.textContent = "Choose a tool first! ⚠️";
    }
});