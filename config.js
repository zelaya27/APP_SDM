const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwyEMaCgm8JG5ZKdgb4TdLzBA607NhvngaBoJ9yKOOM7poeGlLdt9mNVSABbM5teDo5/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
