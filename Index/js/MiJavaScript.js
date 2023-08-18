const searchInput = document.getElementById('search-input');{
const searchButton = document.getElementById('search-button');
const resultsList = document.getElementById('results-list');

searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    const searchId = searchInput.value.toLowerCase();
    const element = document.getElementById(searchId);

  // Limpiar resultados anteriores
    resultsList.innerHTML = '';

    if (element) {
        // Crear un nuevo elemento de lista para mostrar el resultado
        const resultItem = document.createElement('ul');
        
        // Agregar el elemento de lista al contenedor de resultados
        resultsList.appendChild(resultItem);
        
        // Desplazarse hacia la ubicación del elemento de manera suave
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
        // Crear un nuevo elemento de lista para mostrar el mensaje de no encontrado
        const resultItem = document.createElement('li');
        resultItem.textContent = `No se encontró ningún elemento con el ID "${searchId}".`;
        
        // Agregar el elemento de lista al contenedor de resultados
        resultsList.appendChild(resultItem);
    }
});} 