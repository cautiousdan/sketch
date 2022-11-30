
let i = 1;
function spawnGrid(size) {
    let verticalRuns = 0;
    let horizontalRuns = 0;
    while (verticalRuns < size) {
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode("");

        newDiv.appendChild(newContent);
        newDiv.classList.add("VerticalDiv");
        //newDiv.setAttribute('id', eval("VerticalDiv" + verticalRuns));

        let currentDiv = document.getElementById("MainDiv");
        currentDiv.appendChild(newDiv);
        horizontalRuns = 0;
        while (horizontalRuns < size) {
            //Get the bottom horizontal div.
            let lastVerticalDiv = Array.from(document.querySelectorAll('.VerticalDiv')).pop();
            console.log(`lastVerticalDiv is ${lastVerticalDiv}`);

            //Add a new div inside the vertical div
            let newHTML = "<div class=HorizontalDiv>#</div>";
            lastVerticalDiv.insertAdjacentHTML("beforeend", newHTML);
            horizontalRuns++
        }
        verticalRuns++;
    }
}

spawnGrid(4);

/*
let newDiv = document.createElement("div");
let newContent = document.createTextNode("!");
newDiv.appendChild(newContent);

let currentDiv = document.getElementById("MainDiv");
currentDiv.appendChild(newDiv);
*/