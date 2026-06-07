const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycby97pGEaE4kU3574bBxlC13qiWSBV6dUn3M_3oQ_6DZ0J1kbBJc53dVeiROIkM_jQAo/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
