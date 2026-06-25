const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwimNf5XV-wlBeipSDGpME0Bcd3HDFVG4SgdTPg2JgqBvG-cH1K_kHsBqSNJgGeivSX/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
