
var containerGrid = document.getElementById("containerGrid");

for(let i = 0; i < 9; i++)
{
    var grid = document.createElement("div");
    grid.id = "grid";
    grid.className = "grid" + i;
    grid.role = "button";
    grid.style.border = "1px solid black";

    containerGrid.appendChild(grid);
}

var containerGrid = document.getElementById("containerGrid");
var subContainer = document.querySelectorAll("#grid");

let count = 0;
subContainer.forEach((subContainer, index) => {
  subContainer.addEventListener('click', () => {
    count++;
    console.log(`Clicked on Sub Container ${index + 1}`);
    if(count % 2 == 0)subContainer.innerHTML = "O";
    if(count % 2 != 0)subContainer.innerHTML = "X";
    console.log(count);
  });
});































