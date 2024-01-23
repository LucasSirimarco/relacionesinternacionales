document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento select
    const selectIdioma = document.getElementById("idioma");

    // Escuchar el evento "change" del select
    selectIdioma.addEventListener("change", function() {
        // Obtener el valor seleccionado del select
        const idiomaSeleccionado = selectIdioma.value;

        // Llamar a la función para cambiar el idioma
        cambiarIdioma(idiomaSeleccionado);
    });
});

function cambiarIdioma(idioma) {
    // Definir los textos en diferentes idiomas
    if(idioma == "es"){
        location.href="../index.html";
        console.log("Se eljijio Español")
    }

}