const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbx7i1NR_uwtLcMj3LUrqal6Nsy4CdsZARkfraEVhd5ziINnYDG62LkLc8XPV9IurndW/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
