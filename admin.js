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
  let id = 1; //hmmm ID blir knasigt
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
      saveEvent(id, eventNameInput.value, eventDateInput.value, eventCategorySelect.value, eventTextInput.value);
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

  function saveEvent(id, name, date, category, text) {
    let addedEvent = new Event(id, name, date, category, text);
    console.log("sparar eventformulär");
    localStorage.setItem(`event${addedEvent.id}`, JSON.stringify(addedEvent));
  }

  function showCreatedEvent(name, date, category, text) {
    const eventTr = document.createElement("tr");
    eventTr.setAttribute("class", category);

    const createdEventName = document.createElement("td");
    createdEventName.innerHTML = name;

    const createdEventDate = document.createElement("td");
    createdEventDate.innerText = date;

    let createdEventCategory = document.createElement("td");
    createdEventCategory.innerText = category;

    const createdEventText = document.createElement("td");
    createdEventText.innerText = text;

    //delete-del
    const deleteCheckboxTd = document.createElement("td");
    const deleteCheckbox = document.createElement("input");
    deleteCheckbox.setAttribute("id", `event${id}`);

    deleteCheckboxTd.append(deleteCheckbox);
    deleteCheckbox.setAttribute("type", "checkbox");
    deleteCheckbox.addEventListener("click", () => {
      eventTr.remove();
      localStorage.removeItem(deleteCheckbox.id);
    });

    //edit-del TEST
    const editCheckboxTd = document.createElement("td");
    const editCheckbox = document.createElement("input");
    editCheckbox.setAttribute("class", `event${id}`);

    const saveEditedEvent = document.createElement("button");
    saveEditedEvent.setAttribute("type", "button");
    //id eller class?
    saveEditedEvent.addEventListener("click", () => {
      //SPARA uppdaterad info!
      //<input type="text" value="födelsedagesfest!"> => <td>födelsedagesfest!</td>
    })

    editCheckboxTd.append(editCheckbox);
    editCheckbox.setAttribute("type", "checkbox");
    editCheckbox.addEventListener("click", function () {
      editCheckbox.disabled = true;
      console.log(localStorage.removeItem(this.className));
      //vi vill hitta det eventet i localStorage som har samma värde som this.className

      createdEventName.innerHTML = `<input id="updatedName" type="text" value="${name}">`;
      createdEventDate.innerHTML = `<input id="updatedDate" type="date" value="${date}">`;
      createdEventCategory.innerHTML = `<select id="updatedCategory"><option value="wedding">wedding</option><option value="festival">festival</option><option value="concert">concert</option><option value="event">event</option></select>`;
      createdEventText.innerHTML = `<input id="updatedText" type="text" value="${text}">`;
      
      const saveEditedEventBtn = document.createElement("button");
      saveEditedEventBtn.setAttribute("type", "button");
      saveEditedEventBtn.innerText = "Spara";
      editCheckboxTd.append(saveEditedEventBtn);
      let updatedName = document.getElementById("updatedName");
      let updatedDate = document.getElementById("updatedDate");
      let updatedCategory = document.getElementById("updatedCategory");
      let updatedText = document.getElementById("updatedText");
      
      saveEditedEventBtn.addEventListener("click", function() {
        //id++; //KAOS
        saveEvent(id, updatedName.value, updatedDate.value, updatedCategory.value, updatedText.value);
      })
      
    });


    eventTr.append(createdEventName, createdEventDate, createdEventCategory, createdEventText, deleteCheckboxTd, editCheckboxTd);

    createdEvents.append(eventTr);
    id++; //ev. KAOS
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