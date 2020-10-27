document.addEventListener("DOMContentLoaded", function(event) {
    let guestBookBtn = document.getElementById("guestBookBtn");
    let textInput = document.getElementById("textInput");

    let guestBookText = document.getElementById("guestBookText");
    guestBookBtn.addEventListener("click", function(e) {


        nyText = textInput.value;
        let newRow = document.createElement("p");
        console.log(nyText);

        newRow.append(nyText);
        guestBookText.append(newRow);
        textInput.value = "";

    })

})