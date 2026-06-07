const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzh_Eaugj16ezB8lMN73rG0_IdlTl9kExyGPqcsmSvi5NZuqKD4sJ9HZAqQPLAGVU-G/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
