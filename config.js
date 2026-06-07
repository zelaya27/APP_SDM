const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbw884EXh7ffCQJQhAQ-fhNEPx5S2_pwvQSRE_wBVyhod-S-dCoObwY4S5nZlJCSgq1p/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
