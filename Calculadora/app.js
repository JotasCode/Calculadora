document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
    const deleteButton = document.getElementById('delete');})
    
    let currentInput = '';
    
    // Función para actualizar la pantalla
    const updateScreen = () => {
        screen.value = currentInput;
    };

    // Evento para botón de borrar (DEL) 
    deleteButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
    )};

    // Evento para botón de limpiar (C)
    clearButton.addEventListener('click', () => {
        currentInput = '';
        updateScreen();
    });
    
    // Evento para botón de igual (=)
    equalButton.addEventListener('click', () => {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
        updateScreen();
    });
    
   // Eventos para los botones de números y operadores
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = event.target.textContent;

            // Ignorar botones especiales aquí
            if (value !== '=' && value !== 'C' && value !== 'DEL') {
                currentInput += value;
                updateScreen();
            }
        });
    });
});
