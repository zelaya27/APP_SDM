const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxZpe4lz2nLrg5jcM4RxVEEiWQ-khD_ocXqC_E3hlRcPAGZsIq2vZqq_XxeDYDtskYv/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
