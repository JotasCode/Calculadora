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
        const value = event.target.textContent;

        if (value === 'C') {
            currentInput = '';
            updateScreen();
        } else if (value === '=') {
            if (/[\+\-\*\/]$/.test(currentInput)) {
                currentInput = 'Error';
            } else {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
            }
            updateScreen();
        } else if (value === 'DEL') 
            {   
            currentInput = currentInput.slice(0, -1);
            updateScreen();
        } else {
            currentInput += value;
            updateScreen();
        }
    });
});
})
