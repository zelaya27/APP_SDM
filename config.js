const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxGwpJ9nU9JuloBB_YFMlW4co28BxmYV4DwhGHnEO8l1nJ2vP29rNfSdzbxRbL7Jc11/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
