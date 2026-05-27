const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbze1knW6IFxyYFI7h3xXOcqzC8xyNsR6hVzxOoBDPwTZoiZLhh1ExkbqrHFXKcavnwQ/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
