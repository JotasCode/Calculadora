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
    
    // Agregar eventos a los botones
    buttons.forEach(button => {
    deleteButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
    button.addEventListener('click', (event) => {
            const value = event.target.textContent;
            if (value === 'C') {
                currentInput = '';
                updateScreen();
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
                updateScreen();
            } else {
                currentInput += value;
                updateScreen();
            }
        });
    });
});