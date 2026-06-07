const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyqwE9z1ah7b8Nqgt6o3oBjRPsiqVT0LWJWSiJmKYp4gSDhfGdcgGKKMekh43twM42d/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
