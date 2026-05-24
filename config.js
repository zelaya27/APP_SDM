const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyJS_Ia531W0hdIB6ZZoQam_b0M4Kgr85iibOdX4dnHZuIzH3Xe0GAqXHpccNciTKEG/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
