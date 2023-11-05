const url = "https://meowfacts.herokuapp.com/?lang=esp"; //El link de nuestra API gatuna
const meowButton = document.getElementById("meowButton");
const meowButton2 = document.getElementById("meowButton2");
const popupMessage = document.getElementById("popupMessage"); 
const popupContainer = document.getElementById("popupContainer");
const staticBackdrop = document.getElementById("staticBackdrop");
//Conseguimos cada id para luego usarlos



document.addEventListener("DOMContentLoaded", () =>{

    meowButton.addEventListener("click", () => {
        console.log("Clic en meowButton");

        fetch(url)
            .then(response => response.json())
            .then(data => showMeowFacts(data))
            .catch(error => console.error("Error al mostrar meow facts", error));
    });
    
    meowButton2.addEventListener("click", () => {
        fetch(url)
            .then(response => response.json())
            .then(data => showMeowFacts2(data))
            .catch(error => console.error("Error al mostrar meow facts", error));
    });
    
    function showMeowFacts(meowArray) {
        if (meowArray && Array.isArray(meowArray.data)) {
            popupMessage.innerHTML = `<p  style="text-align: center;"> ${meowArray.data[0]} </p>`;
        } else {
            console.error("Los datos recibidos no tienen el formato esperado.");
        }
    }
    
    function showMeowFacts2(meowArray) {
        if (meowArray && Array.isArray(meowArray.data)) {
            popupMessage.innerHTML = `<p  style="text-align: center;"> ${meowArray.data[0]} </p>`;
        } else {
            console.error("Los datos recibidos no tienen el formato esperado.");
        }
    }

});