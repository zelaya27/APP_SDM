const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyL-z_dCnDFdwwW00OTF_rcFtzQrlcxVhdTJkKesYmEiwL1ppRlkRF5GojBRduTbv_Z/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
