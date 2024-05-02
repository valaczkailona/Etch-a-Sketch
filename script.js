const grid = document.querySelector('#container');
const gridSize = 16;

function drawGrid(gridSize) {

    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        grid.appendChild(row);
        //draw column divs whitin each raw
        for (let j = 1; j <= gridSize; j++){
            const column = document.createElement('div');
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    return grid;
};
drawGrid(gridSize);

grid.addEventListener('mouseover', (e) => {
    const gridPart = e.target;
    gridPart.style.backgroundColor = "black";
})


