const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyJcl2Fvc_k-d3P15HhVw8Wod1doEIFbBhscgoskh17whzpweJ28oOjWa_ULqM0Mgwy/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
