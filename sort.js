document.addEventListener('DOMContentLoaded', function (e) {

    let eventArray = [];
    let filterArray = [];


    // Collects data from localstorage an pushes it into a new eventArray
    let events = Object.values(localStorage);
    events.forEach(event => {
        event = JSON.parse(event);
        eventArray.push(event);
    });

    // Runs a sorting function on evenArray
    eventArray.sort(compareDiv);

    // Runs displayEvents function
    displayEvents();


    function displayEvents() {
        // Creates needed variables 
        let eventCount = 1;
        let count = 0;
        let eventDiv = document.getElementById("create-event-bars");
        eventDiv.innerHTML = '';

        // Runs a for-loop that creates all the necessary divs 
        // and that can be used to fill with information 
        // from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            createEventDiv(eventCount, count);

            // Gets all elements whithin the eventdiv
            let h2 = document.getElementById("title" + [eventCount]);
            let p1 = document.getElementById("p-date" + [eventCount]);
            let p2 = document.getElementById("p-category" + [eventCount]);

            // Fills all elements whithin the eventdiv
            h2.innerHTML = eventArray[count].name;
            p1.innerHTML = eventArray[count].date;
            p2.innerHTML = eventArray[count].category;

            count++;
            eventCount++;

        }
    }

    // Creates a sorting function that responds to when
    // the dropdownmenu changes
    let selectMenu = document.getElementById("mySelect");
    selectMenu.addEventListener("change", function (e) {
        // Runs a for-loop that pushes all existing divs 
        // into a filterArray
        for (let i = 1; i <= localStorage.length; i++) {
            let filter = document.getElementById("div" + [i]);
            filterArray.push(filter);
        }

        // If the user chooses "Visa alla" it removes all hidden 
        // classes from alla event divs 
        if (selectMenu.value === "default") {
            for (let i = 0; i < filterArray.length; i++) {
                filterArray[i].classList.remove("hidden");
            }
        } else {
            // Adds a hidden class to all divs from filterArray
            for (let i = 0; i < filterArray.length; i++) {
                filterArray[i].classList.add("hidden");
            }
            // Depending on what the user chooses to filter on 
            // displays the requested choice and removes the 
            // hidden class from the div
            for (let i = 0; i < localStorage.length; i++) {
                if (filterArray[i].classList.contains(selectMenu.value)) {
                    filterArray[i].classList.remove("hidden");
                }
            }
        }
        filterArray = [];

    })

    function createEventDiv(eventCount, count) {
        let eventDiv = document.getElementById("create-event-bars");

        // Creates a div whithin "create-event-bars"
        let createDivTag = document.createElement("div");
        // Sets 2 classes on the div, first the date and then the category
        createDivTag.setAttribute("class", `${eventArray[count].date} ${eventArray[count].category}`);
        // sets an id on the div depending on eventCount
        createDivTag.setAttribute("id", "div" + [eventCount]);
        // Appends the created div to "create-event-bars"
        eventDiv.appendChild(createDivTag);

        // Creates a h2 element
        let createHeaderTag = document.createElement("h2");
        // sets an id "title" on the element that changes depending on the eventCount
        createHeaderTag.setAttribute("id", "title" + [eventCount]);
        // Creates a p tag
        let CreatePTag = document.createElement("p");
        // Sets id "p-date" same as the title 
        CreatePTag.setAttribute("id", "p-date" + [eventCount]);
        // Creates a p tag
        let createPTag2 = document.createElement("p");
        // Sets id "p-category" same as the title 
        createPTag2.setAttribute("id", "p-category" + [eventCount]);

        // Appends all the created elements to the div
        createDivTag.appendChild(createHeaderTag);
        createDivTag.appendChild(CreatePTag);
        createDivTag.appendChild(createPTag2);
    }


    let sortBtn = document.getElementById("eventBtn");
    sortBtn.addEventListener("click", function (e) {
        eventArray.reverse();
        displayEvents();

    });

    
    function compareDiv(a, b) {
        let dateFirst = a.date;
        let dateSecond = b.date;
        return dateFirst.localeCompare(dateSecond);
    }


});