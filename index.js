let uuid = self.crypto.randomUUID();
console.log(uuid); 

let data = [
  {
    "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
    "type": "input",
    "label": "Sample Input",
    "placeholder": "Sample placeholder"
  },
  {
    "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
    "type": "select",
    "label": "Sample Select",
    "options": ["Sample Option", "Sample Option", "Sample Option"]
  },
  {
    "id": "45002ecf-85cf-4852-bc46-529f94a758f5",
    "type": "textarea",
    "label": "Sample Textarea",
    "placeholder": "Sample Placeholder"
  },
  {
    "id": "680cff8d-c7f9-40be-8767-e3d6ba420952",
    "type": "checkbox",
    "label": "Sample Checkbox"
  }
];

localStorage.setItem('userdata', JSON.stringify(data));

const form = document.getElementById('form');
const inputcomp = document.getElementById("input-comp");
const selectcomp = document.getElementById("select-comp");
const textcomp = document.getElementById("text-comp");
const saveBtn = document.getElementById("save-btn");

inputcomp.addEventListener('click', () => {
  const newInput = {
    id: self.crypto.randomUUID(),
    type: "input",
    label: "Sample Input",
    placeholder: "Sample Placeholder"
  };
  data.push(newInput);
  renderForm();
});

selectcomp.addEventListener('click', () => {
  const newSelect = {
    id: self.crypto.randomUUID(),
    type: "select",
    label: "Sample Select",
    options: ["Sample Option", "Sample Option", "Sample Option"]
  };
  data.push(newSelect);
  renderForm();
});

textcomp.addEventListener("click", () => {
  const newText = {
    id: self.crypto.randomUUID(),
    type: "textarea",
    label: "Sample Textarea",
    placeholder: "Sample Placeholder"
  };
  data.push(newText);
  renderForm();
});

function deleteComponent(id) {
  data = data.filter(item => item.id !== id);
  renderForm();
}

function renderForm() {
  form.innerHTML = "";  
  data.forEach((el, index) => {
    const div = document.createElement("div");
    div.setAttribute("draggable", true);
    div.dataset.id = el.id;
    div.addEventListener("dragstart", handleDragStart);
    div.addEventListener("dragover", handleDragOver);
    div.addEventListener("drop", handleDrop);
    
    if (el.type === "input") {
      div.innerHTML = `
        <label for="${el.id}">${el.label}</label><br>
        <input type="text" id="${el.id}" placeholder="${el.placeholder}">
        <button class="delete" onclick="deleteComponent('${el.id}')">Delete</button>
      `;
    } else if (el.type === "select") {
      div.innerHTML = `
        <label for="${el.id}">${el.label}</label><br>
        <select id="${el.id}">
          ${el.options.map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button class="delete" onclick="deleteComponent('${el.id}')">Delete</button>
      `;
    } else if (el.type === "textarea") {
      div.innerHTML = `
        <label for="${el.id}">${el.label}</label><br>
        <textarea id="${el.id}" placeholder="${el.placeholder}"></textarea>
        <button class="delete" onclick="deleteComponent('${el.id}')">Delete</button>
      `;
    } else if (el.type === "checkbox") {
      div.innerHTML = `
        <label for="${el.id}">${el.label}</label>
        <input  style= "width: 100px;
    padding-left: 69px;
    margin-left: -17px;
    height: 25px;
    margin-top: 10px;" type="checkbox" id="${el.id}"> <br/>
        <button class="delete" onclick="deleteComponent('${el.id}')">Delete</button>
      `;
    }
    form.appendChild(div);
  });
}

function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text/plain");
  const droppedOnId = event.target.closest("div").dataset.id;
  
  const draggedIndex = data.findIndex(item => item.id === draggedId);
  const droppedOnIndex = data.findIndex(item => item.id === droppedOnId);
  
  if (draggedIndex !== -1 && droppedOnIndex !== -1 && draggedIndex !== droppedOnIndex) {
    const [movedItem] = data.splice(draggedIndex, 1);
    data.splice(droppedOnIndex, 0, movedItem);
    renderForm();
  }
}

saveBtn.addEventListener("click", () => {
  console.log("Saved JSON:", JSON.stringify(data, null, 2));
});

renderForm();
console.log(data)
localStorage.setItem('userdata1', JSON.stringify(data));
