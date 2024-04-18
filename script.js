document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const wallTool = document.getElementById('wallTool');
    const doorTool = document.getElementById('doorTool');
    const windowTool = document.getElementById('windowTool');
    let selectedTool = null;

    // Adicionar funcionalidades para arrastar os botões
    wallTool.addEventListener('mousedown', function(event) {
        selectedTool = 'wallTool';
        startDrag(event);
    });

    doorTool.addEventListener('mousedown', function(event) {
        selectedTool = 'doorTool';
        startDrag(event);
    });

    windowTool.addEventListener('mousedown', function(event) {
        selectedTool = 'windowTool';
        startDrag(event);
    });

    // Função para iniciar o arrasto
    function startDrag(event) {
        const offsetX = event.clientX - event.target.getBoundingClientRect().left;
        const offsetY = event.clientY - event.target.getBoundingClientRect().top;

        function moveElement(event) {
            const x = event.clientX - canvas.offsetLeft - offsetX;
            const y = event.clientY - canvas.offsetTop - offsetY;
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
                if (selectedTool === 'wallTool') {
                    drawWall(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
                } else if (selectedTool === 'doorTool') {
                    addDoor(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
                } else if (selectedTool === 'windowTool') {
                    addWindow(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
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
