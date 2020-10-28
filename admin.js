//CRUD -- Create, Read, Update, Delete

class Event {
  constructor(id, name, date, category, text) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.category = category;
    this.text = text;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  let id = 1;
  const createdEvents = document.getElementById("createdEvents");
  const eventCategoryArray = ["wedding", "festival", "concert", "event"];

  const createEvent = () => {
    const eventDiv = document.createElement("div");

    const eventNameLabel = document.createElement("label");
    eventNameLabel.setAttribute("for", "eventNameInput");
    eventNameLabel.innerText = "Eventnamn";

    const eventNameInput = document.createElement("input");
    eventNameInput.setAttribute("id", "eventNameInput");
    eventNameInput.setAttribute("name", "eventName");
    eventNameInput.setAttribute("type", "text");
    eventNameInput.setAttribute("required", "");

    const eventDateLabel = document.createElement("label");
    eventDateLabel.setAttribute("for", "eventDateInput");
    eventDateLabel.innerText = "Datum";

    const eventDateInput = document.createElement("input");
    eventDateInput.setAttribute("id", "eventDateInput");
    eventDateInput.setAttribute("name", "eventDate");
    eventDateInput.setAttribute("type", "date");
    eventDateInput.setAttribute("required", "");

    const eventCategoryLabel = document.createElement("label");
    eventCategoryLabel.setAttribute("for", "eventCategorySelect");
    eventCategoryLabel.innerText = "Kategori";

    const eventCategorySelect = document.createElement("select");
    eventCategorySelect.setAttribute("id", "eventCategorySelect");
    eventCategorySelect.setAttribute("name", "eventCategory");
    eventCategorySelect.setAttribute("required", "");
    eventCategoryArray.forEach(category => {
      let option = document.createElement("option");
      option.setAttribute("value", category);
      option.innerText = category;
      eventCategorySelect.append(option);
    });

    const eventTextLabel = document.createElement("label");
    eventTextLabel.setAttribute("for", "eventTextInput");
    eventTextLabel.innerText = "Text";

    const eventTextInput = document.createElement("input");
    eventTextInput.setAttribute("id", "eventTextInput");
    eventTextInput.setAttribute("name", "eventText");
    eventTextInput.setAttribute("type", "text");
    eventTextInput.setAttribute("required", "");

    eventDiv.append(eventNameLabel, eventNameInput, eventDateLabel, eventDateInput, eventCategoryLabel, eventCategorySelect, eventTextLabel, eventTextInput);
    createEventBtn.after(eventDiv);
    createEventBtn.setAttribute("disabled", "");

    const saveEventBtn = document.createElement("button");
    saveEventBtn.setAttribute("id", "saveEventBtn");
    saveEventBtn.setAttribute("type", "button");
    saveEventBtn.innerText = "Spara";
    saveEventBtn.addEventListener("click", () => {
      saveEvent(eventNameInput.value, eventDateInput.value, eventCategorySelect.value, eventTextInput.value);
      showCreatedEvent(eventNameInput.value, eventDateInput.value, eventCategorySelect.value, eventTextInput.value);
      clearInputs();
    });
    
    eventDiv.after(saveEventBtn);
    console.log("skapar eventformulär");

    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("id", "doneBtn");
    doneBtn.setAttribute("type", "button");
    doneBtn.innerText = "Klar";
    doneBtn.addEventListener("click", () => {
      createEventBtn.disabled = false;
      eventDiv.remove();
      saveEventBtn.remove();
      doneBtn.remove();
    });
    
    createEventBtn.after(doneBtn);

  }

  function saveEvent(name, date, category, text) {
    let addedEvent = new Event(id, name, date, category, text);
    console.log("sparar eventformulär");
    localStorage.setItem(`event${addedEvent.id}`, JSON.stringify(addedEvent));
  }

  function showCreatedEvent(name, date, category, text) {
    const eventTr = document.createElement("tr");
    eventTr.classList.add(date, category);

    const createdEventName = document.createElement("td");
    createdEventName.innerText = name;

    const createdEventDate = document.createElement("td");
    createdEventDate.innerText = date;

    const createdEventCategory = document.createElement("td");
    createdEventCategory.innerText = category;

    const createdEventText = document.createElement("td");
    createdEventText.innerText = text;
    
    const checkboxTd = document.createElement("td");
    const deleteCheckbox = document.createElement("input");
    deleteCheckbox.setAttribute("id", `event${id}`);

    //delete-del
    checkboxTd.append(deleteCheckbox);
    deleteCheckbox.setAttribute("type", "checkbox");
    deleteCheckbox.addEventListener("click", () => {
      eventTr.remove();
      localStorage.removeItem(deleteCheckbox.id);
    });

    //edit-del TEST
    createdEventName.addEventListener("click", function() {
      const editEventName = document.createElement("input");
      editEventName.setAttribute("type", "text");
      createdEventName.append(editEventName);
    }); //skapar nya inputfält vid varje klick...
    
        //bättre med separat edit-knapp?
    
    eventTr.append(createdEventName, createdEventDate, createdEventCategory, createdEventText, checkboxTd);
    
    createdEvents.append(eventTr);
    id++;
  }

  function clearInputs() {
    eventNameInput.value = "";
    eventDateInput.value = "";
    eventCategorySelect.value = ""; //håll koll här ang categorySelect istf input
    eventTextInput.value = "";
  } 

  let createEventBtn = document.getElementById("createEventBtn");
  createEventBtn.addEventListener("click", createEvent);

});