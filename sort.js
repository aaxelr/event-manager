document.addEventListener('DOMContentLoaded', function(e) {

    let eventArray = [];
    let filterArray = [];
    let eventCount = 1;
    let count = 0;

    let events = Object.values(localStorage);
    events.forEach(event => {
        event = JSON.parse(event);
        eventArray.push(event);
    })

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

        //console.log(eventArray.date.sort());

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

        // filterArray.forEach(category => {
        //     category.classList.add("hidden"); 
        // });


        /*  if (selectMenu.value == "wedding") {
             category.classList.remove("hidden")
         } */


        console.log(filterArray);
        console.log(selectMenu.value);


    })

    // ta bort senare efter test
    // let eventBtn = document.getElementById("eventBtn");
    // eventBtn.addEventListener("click", function (e) {
    //     for (let i = 1; i <= localStorage.length; i++) {
    //         let filter = document.getElementById("div" + [i]);
    //         filterArray.push(filter);
    //     }


    //     console.log(filterArray[2].classList.contains("wedding"));
    //     console.log(document.getElementById("mySelect"));

    /*for (let i = 0; i < localStorage.length; i++) {
        if (filterArray[i].classList.contains("wedding") == document.getElementById("mySelect")){
            console.log("hej");
        } else {
            console.log("nej");
        }
    }*/

    //console.log(); // compare with array...


    //})

    function createEventDiv(eventCount, count) {
        let createEventDiv = document.getElementById("create-event-bars");

        let createDivTag = document.createElement("div");
        createDivTag.setAttribute("class", `${eventArray[count].date} ${eventArray[count].category}`);
        createDivTag.setAttribute("id", "div" + [eventCount]);
        createEventDiv.appendChild(createDivTag);

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

    function filterEvent(filterArray) {

        let filterEventMenu = document.getElementById("mySelect");



    }
});






/*filterEventMenu.addEventListener("change", function (e) {

            let wedding = document.getElementsByClassName("wedding");
            let festival = document.getElementsByClassName("festival");
            let concert = document.getElementsByClassName("concert");
            let event = document.getElementsByClassName("event");

            if (filterEventMenu[0].value) { // all
                festival.classlist.remove("hidden");
                concert.classlist.remove("hidden");
                event.classlist.remove("hidden");
                wedding.classlist.remove("hidden");
            }
            if (filterEventMenu[1].value == eventArray[i].category) { //wedding
                filterArray[i].class
            }
            if (filterEventMenu[2].value == eventArray[i].category) { //festival
                festival.classlist.remove("hidden");
                wedding.classlist.add("hidden");
                concert.classlist.add("hidden");
                event.classlist.add("hidden");
            }
            if (filterEventMenu[3].value == eventArray[i].category) { //concert
                concert.classlist.remove("hidden");
                festival.classlist.add("hidden");
                wedding.classlist.add("hidden");
                event.classlist.add("hidden");
            }
            if (filterEventMenu[4].value) { //Event
                event.classlist.remove("hidden");
                festival.classlist.add("hidden");
                concert.classlist.add("hidden");
                wedding.classlist.add("hidden");
            }

        })*/

// let myJSON = '{ "category":"Bröllop", "date":"2020-10-21", "name":"bröllop", "text":"Nu var det dax igen" }';
// let myObj = JSON.parse(myJSON);
// document.getElementById("event-category").innerHTML = myObj.category;
// document.getElementById("event-date").innerHTML = myObj.date;
// document.getElementById("event-name").innerHTML = myObj.name;
// document.getElementById("event-text").innerHTML = myObj.text;

// document.getElementById("result").innerHTML = localStorage.getItem("event2");

// function myFunction() {
//     var para = document.createElement("p");
//     para.innerHTML = "This is a paragraph.";
//     document.getElementById("myDIV").appendChild(para);
// }

/*let titleArray = [];
let dateArray = [];
let categoryArray = [];

eventBtn.addEventListener("click", function(e) {
    for (let i = 1; i < 3; i++) {
        titleArray.push(document.getElementById("event-title" + [i]).innerHTML);
        dateArray.push(document.getElementById("event-date" + [i]).innerHTML);
        categoryArray.push(document.getElementById("event-date" + [i]).innerHTML);
    }
    dateArray.sort(function(a, b) {
        var a1 = a.split('-'),
            b1 = b.split('-');
        return new Date(a1[0], a1[1], a1[2]) - new Date(b1[0], b1[1], b1[2]);
    });
    console.log(dateArray);

})*/

/*var mydate = [
    "2019-10-01",
    "2016-09-13",
    "2014-09-05",
    "2016-09-09",
    "2016-10-02"
];
mydate.sort(function(a, b) {
    var a1 = a.split('-'),
        b1 = b.split('-');
    return new Date(a1[0], a1[1], a1[2]) - new Date(b1[0], b1[1], b1[2]);
});
console.log(mydate);*/