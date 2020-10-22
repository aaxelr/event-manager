//CRUD -- Create, Read, Update, Delete

class Event {
  constructor(name, date, category) {
    this.id; //tilldela n+1 för varje nytt event?
    this.name = name;
    this.date = date;
    this.category = category;
  }

}

document.addEventListener("DOMContentLoaded", () => {

  const createForm = () => {

    const eventNameLabel = document.createElement("label");
    eventNameLabel.setAttribute("for", "eventNameInput");
    eventNameLabel.innerText = "Eventnamn";

    const eventNameInput = document.createElement("input");
    eventNameInput.setAttribute("id", "eventNameInput");
    eventNameInput.setAttribute("name", "eventName");
    eventNameInput.setAttribute("type", "text");

    const eventDateLabel = document.createElement("label");
    eventDateLabel.setAttribute("for", "eventDateInput");
    eventDateLabel.innerText = "Datum";

    const eventDateInput = document.createElement("input");
    eventDateInput.setAttribute("id", "eventDateInput");
    eventDateInput.setAttribute("name", "eventDate");
    eventDateInput.setAttribute("type", "date");

    const eventCategoryLabel = document.createElement("label");
    eventCategoryLabel.setAttribute("for", "eventCategoryeInput");
    eventCategoryLabel.innerText = "Kategori";

    const eventCategoryInput = document.createElement("input");
    eventCategoryInput.setAttribute("id", "eventCategoryInput");
    eventCategoryInput.setAttribute("name", "eventCategory");
    eventCategoryInput.setAttribute("type", "text"); 
    //borde bara gå att välja bland våra förvalda kategorier...

    //Ska rubrik, brödtext och bild läggas till här också tro..?
    
    createEventBtn.before(eventNameLabel, eventNameInput, eventDateLabel, eventDateInput, eventCategoryLabel, eventCategoryInput);

    //här borde createEventBtn gömmas och en ny sparaknapp dyka upp.
    //ev ändra eventlyssnare på createEventBtn och ändra innerText till att "Spara".

    console.log("skapar eventformulär");
  }

  let createEventBtn = document.getElementById("createEventBtn");
  createEventBtn.addEventListener("click", createForm);


});