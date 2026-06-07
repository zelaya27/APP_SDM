const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbx95lUeTC8VYvtPKQsyBGbXhl87zgWjLtmLa4USgUXXe0mNITKPXcn78fYhgXtD6sy0/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
