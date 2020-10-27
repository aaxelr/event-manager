var mydate = [
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
console.log(mydate);
document.addEventListener('DOMContentLoaded', function(e) {
    let eventBtn = document.getElementById("eventBtn");

    let titleArray = [];
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

    })



})