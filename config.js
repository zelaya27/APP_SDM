const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxy_F9zA1wqCcu9IYRMcJkJ7EzXEzUj_IgLboUC6BsF0P7t7RhhSjU91LQOIBy1MKjf/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
