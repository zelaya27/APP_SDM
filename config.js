const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxkBdH0AXNapeoDA3Oc1qkMGnEG9gEJP0uoNBY1t1F3CRfgrBDqLs-ZkljOLGWa7dC7/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
