document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const wallTool = document.getElementById('wallTool');
    const doorTool = document.getElementById('doorTool');
    const windowTool = document.getElementById('windowTool');
    let selectedTool = null;

    let offsetX, offsetY;

    // Adicionar funcionalidades para arrastar os botões
    wallTool.addEventListener('mousedown', startDrag);
    doorTool.addEventListener('mousedown', startDrag);
    windowTool.addEventListener('mousedown', startDrag);

    // Função para iniciar o arrasto
    function startDrag(event) {
        selectedTool = event.target.id;
        offsetX = event.clientX - event.target.getBoundingClientRect().left;
        offsetY = event.clientY - event.target.getBoundingClientRect().top;

        function moveElement(event) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            event.target.style.left = x + 'px';
            event.target.style.top = y + 'px';
        }

        function releaseElement(event) {
            document.removeEventListener('mousemove', moveElement);
            document.removeEventListener('mouseup', releaseElement);

            // Verificar se o botão foi solto dentro do canvas
            const rect = canvas.getBoundingClientRect();
            if (event.clientX >= rect.left && event.clientX <= rect.right && 
                event.clientY >= rect.top && event.clientY <= rect.bottom) {
                // Desenhar o elemento correspondente ao botão solto
                const x = event.clientX - canvas.offsetLeft;
                const y = event.clientY - canvas.offsetTop;
                if (selectedTool === 'wallTool') {
                    drawWall(x, y);
                } else if (selectedTool === 'doorTool') {
                    addDoor(x, y);
                } else if (selectedTool === 'windowTool') {
                    addWindow(x, y);
                }
            }
        }

        document.addEventListener('mousemove', moveElement);
        document.addEventListener('mouseup', releaseElement);
    }

    function drawWall(x, y) {
        // Lógica para desenhar uma parede
        ctx.fillStyle = 'grey';
        ctx.fillRect(x, y, 50, 10);
    }

    function addDoor(x, y) {
        // Lógica para adicionar uma porta
        ctx.fillStyle = 'brown';
        ctx.fillRect(x, y, 20, 40);
    }

    function addWindow(x, y) {
        // Lógica para adicionar uma janela
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, 30, 30);
    }
});
