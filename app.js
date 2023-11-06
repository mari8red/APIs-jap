//El link de nuestra API gatuna
const url = "https://meowfacts.herokuapp.com/?lang=esp"; 
//Conseguimos cada Id con el DOM y los guardamos en constantes
const meowButton1 = document.getElementById("meowButton1");
const meowButton2 = document.getElementById("meowButton2");
const popupMessage = document.getElementById("popupMessage"); 
const popupContainer = document.getElementById("popupContainer");
const staticBackdrop = document.getElementById("staticBackdrop");


document.addEventListener("DOMContentLoaded", () =>{

    //Creamos un evento click para los dos 'meowButton', que traen las curiosidades de la API haciendo una petición a través del fetch
    meowButton1.addEventListener("click", () => {
        console.log("meowButton1 clickeado"); //Comprobamos que funcione el botón

        fetch(url)
            .then(response => response.json())
            .then(data => showMeowFacts(data))
            .catch(error => console.error("Error al mostrar meow facts 1", error));
    });
    
    meowButton2.addEventListener("click", () => {
        fetch(url)
            .then(response => response.json())
            .then(data => showMeowFacts(data))
            .catch(error => console.error("Error al mostrar meow facts 2", error));
    });
    
    //Creamos la función usada en el fetch, que toma y muestra los datos de la API en el HTML
    function showMeowFacts(meowArray) {
        if (meowArray && Array.isArray(meowArray.data)) {
            popupMessage.innerHTML = `<p  style="text-align: center;"> ${meowArray.data[0]} </p>`;
        } else {
            console.error("Los datos recibidos no se pueden mostrar");
        }
    }
    
    //También colocamos mensajes 'console.error' por si no funcionaba alguna de las lógicas

});