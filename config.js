const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzl_gkpbx-b2iy4N8jVsZGAxPoipkCxotFWcX5vHWtBoK9ZGBz8ERpWU8nA6FEAG1U_/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
