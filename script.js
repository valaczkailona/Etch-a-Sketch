
const grid = document.querySelector('#container');
const btn = document.querySelector('button');

let gridSize = 16
drawGrid(gridSize);

btn.addEventListener('click', () => {
    gridSize = +(prompt("Add a mumber between 1-100", ''));

    if (gridSize > 0 && gridSize<= 100) {
        drawGrid(gridSize);
    } else if (gridSize <= 0 ||
                gridSize > 100 ||
                isNaN(gridSize))  {
        gridSize = +(prompt("Add a mumber between 1-100", ''));
    }    
});


function drawGrid(gridSize) {
 
    grid.innerHTML = "";
    
    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
       
        //draw column divs whitin each raw
        for (let j = 1; j <= gridSize; j++){
            const square = document.createElement('div');
            square.classList.add("column");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
    return grid;
};

function randomBgColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x},${y},${z})`;

    return bgColor;
};

grid.addEventListener('mouseover', (e) => {
    const gridPart = e.target;
    gridPart.style.backgroundColor = randomBgColor();
    
})




