const $inputElement = document.getElementById("input");
const $tasks = document.getElementById("tasks");
let $warning = document.getElementById("warning");

function add(event) {
  event.preventDefault();
  let $input = $inputElement.value;
  if (!$input) {
    $warning.innerText = "Please enter the Task";
  } else {
    $warning.innerText = "";
    const newItem = document.createElement("li");
    const deleteItem = document.createElement("span");
    newItem.textContent = $input;
    newItem.appendChild(deleteItem);
    $tasks.appendChild(newItem);
    deleteItem.innerHTML = "&#x2716;";
    $inputElement.value = "";
    storeData();
    deleteItem.onclick = deleteTask;
  }
}

function deleteTask(event) {
  if (event.target.tagName.toLowerCase() === "span") {
    const taskItem = event.target.parentElement;
    $tasks.removeChild(taskItem);
    storeData();
  }
}

function storeData() {
  localStorage.setItem("tasks", $tasks.innerHTML);
}

function getItem() {
  $tasks.innerHTML = localStorage.getItem("tasks");
  const deleteButtons = document.querySelectorAll("#tasks span");
  deleteButtons.forEach((button) => (button.onclick = deleteTask));
}
getItem();
