// When size is submitted by the user, call makeGrid()
let form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);

function makeGrid(event) {
  // Select size input
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  let table = document.getElementById('pixelCanvas');
  let tableBody = document.createElement('tbody');

  // to clear out previous grid
  table.innerHTML = "";
  // formation of grid
  for (let r = 0; r < height; r++) {
    let row = document.createElement("tr");

    for (let c = 0; c < width; c++) {
      let cell = document.createElement("td");
      // when cell is clicked by user, background color changes
      cell.addEventListener('click', function (event) {
        let color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
      } );
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  // to prevent page from refreshing
  event.preventDefault();

}
