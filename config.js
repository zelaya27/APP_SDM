const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwB5Rt8ELyWBWEizw8nV4ETVfSTdQ8Qmh_SDDCJ50jap20pmUihrbHz0NwPUnF4iftK/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
