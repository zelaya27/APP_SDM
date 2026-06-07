const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyBwi0QDI5QzxE_9BoD2Hr4CVDh-QomX_p9l5PSquqmf8o2O-5toKWvlENolOuoXP-3/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
