const heading = document.getElementById("main-heading");

heading.textContent = "Welcome to Melody's Dashboard!";

const message = document.getElementById("welcome-message");
message.textContent = "I am learning Javascript DOM Manipulation!"
const headinb = document.getElementById("main-heading");

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";

heading.style.fontSize = "35px";

heading.style.textAlign = "center";

const paragraph = document.getElementById("welcome-message");
paragraph.style.color = "green";
paragraph.style.fontSize = "24px";
paragraph.style.backgroundColor = "lightyellow";
paragraph.style.textAlign = "center";

const header = document.getElementById("main-heading");
header.classList.add("highlight");

const tasks = document.querySelectorAll(".task");

tasks.forEach(function(task) {
    task.classList.add("highlight");
});
const list = document.getElementById("subject-list");
const newList = list.appendChild(document.createElement("li"));
newList.textContent = "Computer Networks";

 const listItems = document.querySelectorAll("#subject-list li");
 listItems[2].remove();

 const button = document.getElementById("change-name-btn");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});
const paragraph1 = document.getElementById("student-name");
const btn = document.getElementById("change-name-btn");

btn.addEventListener("click", function() {
    paragraph1.textContent = "Name: Engineer Melody";
});
const btn2 = document.getElementById("update-status-btn");
const paragraph2 = document.getElementById("status");
btn2.addEventListener("click", function() {
    paragraph2.textContent = "Status: Active";
});