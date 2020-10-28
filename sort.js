document.addEventListener('DOMContentLoaded', function (e) {

    let eventArray = [];
    let eventCount = 1;
    let count = 0;

    for (let i = eventCount; i <= localStorage.length; i++) {
        let event = JSON.parse(window.localStorage.getItem('event' + [i]));;
        eventArray.push(event);
    }

    for (let i = 0; i < localStorage.length; i++) {

        createEventDiv(eventCount);

        let h2 = document.getElementById("title" + [eventCount]);
        let p1 = document.getElementById("p-date" + [eventCount]);
        let p2 = document.getElementById("p-category" + [eventCount]);

        h2.innerHTML = eventArray[count].name;
        p1.innerHTML = eventArray[count].date;
        p2.innerHTML = eventArray[count].category;

        console.log(eventCount);
        count++;
        eventCount++;

        console.log(eventArray[0].date);
    }

    function createEventDiv(eventCount) {
        let createEventDiv = document.getElementById("create-event-bars");

        let createDivTag = document.createElement("div");
        createDivTag.setAttribute("id", "demoClass" + [eventCount]);
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

        console.log("check if it works");
    }
});



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