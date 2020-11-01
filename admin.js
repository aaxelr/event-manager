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

//DOMContentLoaded
//Grabs the tbody-element to which all events are appended.
//Shows created events (if any).
//Defines our categories (future changes like adding, removing, renaming categories could be done).
document.addEventListener("DOMContentLoaded", () => {
  const createdEvents = document.getElementById("createdEvents");
  showCreatedEvent();
  const eventCategoryArray = ["wedding", "festival", "concert", "event"];

  //Creates labels and inputs for all fields
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

    //Appends created elements and disables createEventBtn.
    eventDiv.append(eventNameLabel, eventNameInput, eventDateLabel, eventDateInput, eventCategoryLabel, eventCategorySelect, eventTextLabel, eventTextInput);
    createEventBtn.after(eventDiv);
    createEventBtn.setAttribute("disabled", "");

    //Save button
    const saveEventBtn = document.createElement("button");
    saveEventBtn.setAttribute("id", "saveEventBtn");
    saveEventBtn.setAttribute("type", "button");
    saveEventBtn.innerText = "Spara";
    saveEventBtn.addEventListener("click", () => {

      saveEvent(eventNameInput.value, eventDateInput.value, eventCategorySelect.value, eventTextInput.value);
      createdEvents.innerHTML = "";
      showCreatedEvent();
      clearInputs();
    });

    eventDiv.after(saveEventBtn);

    //Done button
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

  //Creates id based on the highest id already in localStorage.
  //Grabs values from inputs and creates new instance of Event.
  //Saves created event to localStorage as a JSON object.
  function saveEvent(name, date, category, text) {
    let id;
    let eventKeys = Object.keys(localStorage);
    if (eventKeys == "") {
      id = 1;
    } else {
      id = Math.max(...eventKeys) + 1;
    }

    let addedEvent = new Event(id, name, date, category, text);
    localStorage.setItem(addedEvent.id, JSON.stringify(addedEvent));

  }

  //Grabs data from localStorage and parses it.
  //Iterates over events in localStorage.
  //Puts the event in a table row and puts every value in its designated table cell.
  //Adds a delete checkbox to the event row.
  //Adds a edit checkbox and save button to the event row.
  function showCreatedEvent() {

    let eventArray = [];

    let events = Object.values(localStorage);
    events.forEach(event => {
      event = JSON.parse(event);
      eventArray.push(event);
    });

    let createdEventName, createdEventDate, createdEventCategory, createdEventText, eventTr;
    let deleteCheckboxTd, deleteCheckbox;
    let editCheckboxTd, editCheckbox;

    for (let i = 0; i < eventArray.length; i++) {
      eventTr = document.createElement("tr");
      eventTr.setAttribute("class", eventArray[i].category);

      createdEventName = document.createElement("td");
      createdEventName.innerText = eventArray[i].name;
      createdEventName.setAttribute("class", `event${eventArray[i].id}`)

      createdEventDate = document.createElement("td");
      createdEventDate.innerText = eventArray[i].date;
      createdEventDate.setAttribute("class", `event${eventArray[i].id}`)

      createdEventCategory = document.createElement("td");
      createdEventCategory.innerText = eventArray[i].category;
      createdEventCategory.setAttribute("class", `event${eventArray[i].id}`)

      createdEventText = document.createElement("td");
      createdEventText.innerText = eventArray[i].text;
      createdEventText.setAttribute("class", `event${eventArray[i].id}`)

      //Delete part
      deleteCheckboxTd = document.createElement("td");
      deleteCheckbox = document.createElement("input");
      deleteCheckbox.setAttribute("id", eventArray[i].id);
      deleteCheckbox.setAttribute("type", "checkbox");
      deleteCheckbox.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
        localStorage.removeItem(eventArray[i].id);
      });

      deleteCheckboxTd.append(deleteCheckbox);

      //Edit part
      //(Edit function should probably be a named function instead of an anonymous function.)
      //Removes contents from event table data cells.
      //Creates new input/select elements, appends thema and fills them with event info. 
      editCheckboxTd = document.createElement("td");

      editCheckbox = document.createElement("input");
      editCheckbox.setAttribute("class", eventArray[i].id);
      editCheckbox.setAttribute("type", "checkbox");
      editCheckbox.addEventListener("click", function () {
        let tds = document.getElementsByClassName(`event${eventArray[i].id}`);
        for (let td of tds) {
          td.innerHTML = "";
        }

        let editNameInput = document.createElement("input");
        editNameInput.setAttribute("type", "text");
        editNameInput.setAttribute("id", `editName${eventArray[i].id}`);
        editNameInput.value = eventArray[i].name;
        tds[0].append(editNameInput);

        let editDateInput = document.createElement("input");
        editDateInput.setAttribute("type", "date");
        editDateInput.setAttribute("id", `editDate${eventArray[i].id}`);
        editDateInput.value = eventArray[i].date;
        tds[1].append(editDateInput);

        let editCategorySelect = document.createElement("select");
        editCategorySelect.setAttribute("id", `editCategory${eventArray[i].id}`);
        eventCategoryArray.forEach(category => {
          let option = document.createElement("option");
          option.setAttribute("value", category);
          option.innerText = category;
          editCategorySelect.append(option);
        });

        tds[2].append(editCategorySelect);

        let editTextInput = document.createElement("input");
        editTextInput.setAttribute("type", "text");
        editTextInput.setAttribute("id", `editText${eventArray[i].id}`);
        editTextInput.value = eventArray[i].text;
        tds[3].append(editTextInput);
      });

      //Save edited button
      //Saves edited event to localStorage.
      //Empties the tbody-element and then shows the events in localStorage.
      const saveEditedEventBtn = document.createElement("button");
      saveEditedEventBtn.setAttribute("type", "button");
      saveEditedEventBtn.innerText = "Spara";
      editCheckboxTd.append(saveEditedEventBtn);
      saveEditedEventBtn.addEventListener("click", function () {
        let editedName = document.getElementById(`editName${eventArray[i].id}`)
        let editedDate = document.getElementById(`editDate${eventArray[i].id}`)
        let editedCategory = document.getElementById(`editCategory${eventArray[i].id}`)
        let editedText = document.getElementById(`editText${eventArray[i].id}`)

        let editedEvent = new Event(eventArray[i].id, editedName.value, editedDate.value, editedCategory.value, editedText.value);

        localStorage.setItem(eventArray[i].id, JSON.stringify(editedEvent));

        createdEvents.innerHTML = "";
        showCreatedEvent();

      });

      editCheckboxTd.append(editCheckbox);
      eventTr.append(createdEventName, createdEventDate, createdEventCategory, createdEventText, deleteCheckboxTd, editCheckboxTd);
      createdEvents.append(eventTr);

    };
  }

  function clearInputs() {
    eventNameInput.value = "";
    eventDateInput.value = "";
    eventCategorySelect.value = "";
    eventTextInput.value = "";
  }

  let createEventBtn = document.getElementById("createEventBtn");
  createEventBtn.addEventListener("click", createEvent);

});