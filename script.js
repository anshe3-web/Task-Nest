const input = document.querySelector("input");
const uldata = document.querySelector(".list");

function addtask() {
  if (input.value == "") {
    alert("Please Enter Your Message");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    uldata.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}
uldata.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", uldata.innerHTML);
}
function showData() {
  uldata.innerHTML = localStorage.getItem("data");
}
showData();
