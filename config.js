const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxJIIP6z7tFyBuP33HEXBdsx38ZA0IQTZjnQ0EACEWl7NVlTYOCDbY0jeJi6I7jE3CL/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
