document.addEventListener('DOMContentLoaded', function(e) {

    let eventArray = [];
    let filterArray = [];
    // let eventCount = 1;
    // let count = 0;

    let events = Object.values(localStorage);
    events.forEach(event => {
        event = JSON.parse(event);
        eventArray.push(event);
    });

    eventArray.sort(compareDiv);

    displayEvents();


    function displayEvents() {
        let eventCount = 1;
        let count = 0;
        let eventDiv = document.getElementById("create-event-bars");
        eventDiv.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            createEventDiv(eventCount, count);

            let h2 = document.getElementById("title" + [eventCount]);
            let p1 = document.getElementById("p-date" + [eventCount]);
            let p2 = document.getElementById("p-category" + [eventCount]);

            h2.innerHTML = eventArray[count].name;
            p1.innerHTML = eventArray[count].date;
            p2.innerHTML = eventArray[count].category;
            count++;
            eventCount++;

        }
    }

    let selectMenu = document.getElementById("mySelect");
    selectMenu.addEventListener("change", function(e) {

        if (selectMenu.value === "default") {
            for (let i = 0; i < filterArray.length; i++) {
                filterArray[i].classList.remove("hidden");
            }
        } else {

            for (let i = 1; i <= localStorage.length; i++) {
                let filter = document.getElementById("div" + [i]);
                filterArray.push(filter);
            }

            for (let i = 0; i < filterArray.length; i++) {
                filterArray[i].classList.add("hidden");
            }
            for (let i = 0; i < localStorage.length; i++) {
                if (filterArray[i].classList.contains(selectMenu.value)) {
                    filterArray[i].classList.remove("hidden");
                }
            }
        }


        console.log(filterArray);
        console.log(selectMenu.value);


    })

    function createEventDiv(eventCount, count) {
        let eventDiv = document.getElementById("create-event-bars");

        let createDivTag = document.createElement("div");
        createDivTag.setAttribute("class", `${eventArray[count].date} ${eventArray[count].category}`);
        createDivTag.setAttribute("id", "div" + [eventCount]);
        eventDiv.appendChild(createDivTag);

        let createHeaderTag = document.createElement("h2");
        createHeaderTag.setAttribute("id", "title" + [eventCount]);
        let CreatePTag = document.createElement("p");
        CreatePTag.setAttribute("id", "p-date" + [eventCount]);
        let createPTag2 = document.createElement("p");
        createPTag2.setAttribute("id", "p-category" + [eventCount]);

        createDivTag.appendChild(createHeaderTag);
        createDivTag.appendChild(CreatePTag);
        createDivTag.appendChild(createPTag2);
    }


    let sortBtn = document.getElementById("eventBtn");
    sortBtn.addEventListener("click", function(e) {
        eventArray.reverse();
        displayEvents();

    });


    function compareDiv(a, b) {
        let dateFirst = a.date;
        let dateSecond = b.date;
        return dateFirst.localeCompare(dateSecond);
    }


});