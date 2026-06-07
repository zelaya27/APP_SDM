const CONFIG = {
    URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbyVqDTQZZwWVJ3IYg8pinS51Efl05JFZrpo6sZQI9ekxre3qx8atM81v4K3kPdZvoYX/exec'
};
function normalizarDatos(datos) {
    const limpios = {};
    for (let key in datos) {
        const valor = datos[key];
        limpios[key] = (valor === undefined || valor === null) ? "" : valor;
    }
    return limpios;
}
