const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbwmNuRjttz-OjR0lJikuq5gpSV57CblleZco0_WWfxmw6wFOQ7AdKd6Cv0Hc69fsPn2/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
