const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxDh-bqZBZlv_GQlMWjYI01MBesIUofK8CbyzFewVwfEULqOJKoyfGBg6UahEPUJ7FH/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
