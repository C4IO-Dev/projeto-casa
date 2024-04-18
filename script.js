document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    let drawing = false;
    let selectedTool = 'wallTool'; // Ferramenta padrão é a de parede

    canvas.addEventListener('mousedown', function(event) {
        drawing = true;
        if (selectedTool === 'wallTool') {
            drawWall(event);
        } else if (selectedTool === 'doorTool') {
            addDoor(event);
        } else if (selectedTool === 'windowTool') {
            addWindow(event);
        }
    });

    canvas.addEventListener('mouseup', function() {
        drawing = false;
    });

    canvas.addEventListener('mousemove', function(event) {
        if (drawing) {
            if (selectedTool === 'wallTool') {
                drawWall(event);
            } else if (selectedTool === 'doorTool') {
                // Adicionar funcionalidade para mover ou redimensionar a porta
            } else if (selectedTool === 'windowTool') {
                // Adicionar funcionalidade para mover ou redimensionar a janela
            }
        }
    });

    // Adicionar funcionalidades para trocar a ferramenta selecionada
    document.getElementById('wallTool').addEventListener('click', function() {
        selectedTool = 'wallTool';
    });

    document.getElementById('doorTool').addEventListener('click', function() {
        selectedTool = 'doorTool';
    });

    document.getElementById('windowTool').addEventListener('click', function() {
        selectedTool = 'windowTool';
    });

    function drawWall(event) {
        // Adicionar lógica para desenhar uma parede
    }

    function addDoor(event) {
        // Adicionar lógica para adicionar uma porta
    }

    function addWindow(event) {
        // Adicionar lógica para adicionar uma janela
    }
});

