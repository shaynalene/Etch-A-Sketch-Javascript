const cntr = document.querySelector("#grid-container");

var gridno = 16;

for (var i = 0; i < 16; i++) {
  const squareDivCtr = document.createElement("div");
  squareDivCtr.id = "sqdivctr";
  squareDivCtr.setAttribute("style", "display: flex; flex-direction: column;");
  cntr.appendChild(squareDivCtr);
  for (var j = 0; j < 16; j++) {
    const squareDiv = document.createElement("div");
    squareDiv.id = "sqdiv";
    squareDiv.setAttribute("style", "border: 2px solid; padding: 1em;");

    squareDivCtr.appendChild(squareDiv);
  }
}
