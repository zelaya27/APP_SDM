const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycby-WwBI3dWKdktVKR2WT6l_C_mVcCJtLwmIkjGGHVl82tI826W8dl7ms7sGK1MDJxnI/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
