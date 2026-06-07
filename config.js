const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxRLz-T_kxmKKk-cA-RPhWS1HuiKNq_SdH_w75KIXkBnIckJ3wthuSzCKs8R5dPLBrr/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
