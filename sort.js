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

document.addEventListener('DOMContentLoaded', function (e) {

    let eventArray = []
    let eventCount = 1;
    let eventBtn = document.getElementById("eventBtn");

    eventBtn.addEventListener("click", function (e) {
        createEventDiv(eventCount);
        eventCount++;
        
        for (let i = 1; i <= localStorage.length; i++) {
            let event = JSON.parse(window.localStorage.getItem('event' + [i]));;
            eventArray.push(event);
        }
        for (let i = 0; i <= localStorage.length; i++) {
            console.log(eventArray[i].date);
        }
    })
    function createEventDiv(eventCount) {
        
        let createEventDiv = document.getElementById("create-event-bars");

        let divTag = document.createElement("div");
        divTag.setAttribute("id", "demoClass" + [eventCount]);
        createEventDiv.appendChild(divTag);

        let headerTag = document.createElement("h2");
        headerTag.setAttribute("id", "header" + [eventCount]);
        let pTag = document.createElement("p");
        pTag.setAttribute("id", "paragraf" + [eventCount]);
        let pTag2 = document.createElement("p");
        pTag2.setAttribute("id", "paragraf" + [eventCount]);

        divTag.appendChild(headerTag);
        divTag.appendChild(pTag);
        divTag.appendChild(pTag2);

        console.log("check if it works");
    }

    function fillEventDiv() {

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