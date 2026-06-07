const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbze11pIOEt96H-x2ddfttFJOgWJF12mXBoqAr8xukUJ9txawFZLLTyi8-Mv65WxY4oG/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
