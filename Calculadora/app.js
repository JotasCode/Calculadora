document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado y listo"); 

    const screen = document.getElementById('screen');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
    const deleteButton = document.getElementById('delete');
    let currentInput = '';

    const updateScreen = () => {
        screen.value = currentInput;
    };

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log("Botón presionado:", event.target.textContent);

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
    
    clearButton.addEventListener('click', () => {
        currentInput = '';
        updateScreen();
    });

    deleteButton.addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        updateScreen();
    });

    equalButton.addEventListener('click', () => {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
        updateScreen();
    });
});