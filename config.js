const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyE6eQX5ClcCF4SwtyiRj84iLh73SG63zLjOs-kAXZwGor0GP_a3sHwPUwybQV37s2u/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
