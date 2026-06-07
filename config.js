const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzhTKVtB_FCx6l8OUkXd75fwDfoRONT1g8XRqhPjkj-scNqexsP-kegOHKL2PUFrUBr/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
