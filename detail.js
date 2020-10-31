document.addEventListener("DOMContentLoaded", function(event) {
    let guestBookBtn = document.getElementById("guestBookBtn");
    let textInput = document.getElementById("textInput");

    let guestBookText = document.getElementById("guestBookText");
    guestBookBtn.addEventListener("click", function(e) {


        nyText = textInput.value; // input from guestbook in new variable
        let newRow = document.createElement("p");


        newRow.append(nyText); // input from guestbook to new row
        guestBookText.prepend(newRow); // new row on top of guestbook-input
        textInput.value = "";

    })

})