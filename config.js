const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbxVhOnsuRM65VlFXveNLqa_K9aTuPG6LuJVJh4Ld5VTpG4GOGD8SPMyycpsGCTgimZO/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
