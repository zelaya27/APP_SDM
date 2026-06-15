const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzqj9h9qKAwvMpsVQnT5gMrVQIXGlKuosEEhT1pZq__oWj4PVlTtYrTvDE7jD_NLQiG/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
