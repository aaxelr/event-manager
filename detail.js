document.addEventListener("DOMContentLoaded", function(event) {
    let button2 = document.getElementById("button2");
    let textInput = document.getElementById("textInput");
    let divId = document.getElementById("divId");

    button2.addEventListener("click", function(e) {

        console.log("HELLO");
        nyText = textInput.value;
        console.log(nyText);
        GBtext.append(nyText);
    })

})