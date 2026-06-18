const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwhAnUkSP7OY8lWXHj7awlgeTq-fhakv53Qh5F52ANf_z_ZnRhQqW9oPQcHl1ff6-6L/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
