const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwUzOciMV5pQQ1FB0Tv4WWb2JD-vBsd2szhEyi62D0DmJsyHfdQ1CHVHwbcm7ljW6m4/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
