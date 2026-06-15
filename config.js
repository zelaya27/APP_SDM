const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzPOXKVLBQyv37Cgesv5F-tCxLNy96IWZkfUJeamBsD_liPunmBcf7QIfFZB0GJAbzw/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
