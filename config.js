const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbz1FnAj5uSr9_nJX0yrJkWmtHT5iKy_m_0Gu6449xPUVpnrteMDWFuZ0Q3dUJZ5O5C5/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
