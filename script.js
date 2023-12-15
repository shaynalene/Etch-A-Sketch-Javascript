const cntr = document.querySelector("#grid-container");

var gridno = 16;

loadgrid();

function loadgrid() {
  for (var i = 0; i < gridno; i++) {
    const squareDivCtr = document.createElement("div");
    squareDivCtr.id = "sqdivctr";
    squareDivCtr.setAttribute(
      "style",
      "display: flex; flex-direction: column;"
    );
    cntr.appendChild(squareDivCtr);
    for (var j = 0; j < gridno; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.id = "sqdiv";
      squareDiv.setAttribute("style", "border: 2px solid; padding: 1em;");

      squareDivCtr.appendChild(squareDiv);
    }
  }

  const squares = document.querySelectorAll("#sqdiv");

  squares.forEach((element) => {
    element.addEventListener("mouseover", function (e) {
      e.target.style.background = "blue";
    });
  });
  {
  }
}

const btn = document.querySelector("#btn-grid");

btn.addEventListener("click", function (e) {
  let ipt = prompt("Enter number of rows and columns: ");
  let tempgridno = gridno;
  for (var i = 0; i < tempgridno; i++) {
    let squares = document.querySelector("#sqdivctr");
    cntr.removeChild(squares);
  }
  gridno = ipt;
  loadgrid();
});
