const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzFxR2g3ssGnCjim_z4ECDsdBZbybgmQljBR5cq3QmtrOXy6Fnir4YJbGlt8tuurFX9nQ/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
