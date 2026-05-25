const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzZoZb2J2ArZ5mP3cueWdUCndsEuzgNK3ruLu8piDamIW2TXhn2atPneVAfT2Vpk2LT/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
