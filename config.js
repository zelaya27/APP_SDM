const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyHVAiH5h1mg57SbK66hlRKHfHSwmL667XqCsO3ExYxgO3gTANAMxOVwaGjRNfQhJ0q/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
