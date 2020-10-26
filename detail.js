document.addEventListener("DOMContentLoaded", function(event) {
    let button2 = document.getElementById("button2");
    let textInput = document.getElementById("textInput");
    let divId = document.getElementById("divId");
    let newRow = document.createElement("tr");
    button2.addEventListener("click", function(e) {

        console.log("HELLO");
        nyText = textInput.value;
        let newRow = document.createElement("tr");
        console.log(nyText);

        newRow.append(nyText);
        GBtext.append(newRow);

    })

})