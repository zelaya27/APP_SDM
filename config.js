const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbw6BQeN-lmHZgMXqd7yWOYYE1InyCCCkxCCyIBpKfm0PPBzNZcIOhf-YS_kqhTsqq12/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
