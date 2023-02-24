
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
            let newHTML = "<div class=HorizontalDiv></div>";
            lastVerticalDiv.insertAdjacentHTML("beforeend", newHTML);
            horizontalRuns++
        }
        verticalRuns++;
    }
    addClass();
}

// Add class to .horizontalDiv when mouse hovers over it
function addClass() {
    let horizontalDivs = document.getElementsByClassName("HorizontalDiv");
    for (let i = 0; i < horizontalDivs.length; i++) {
        horizontalDivs[i].addEventListener("mouseover", function () {
            horizontalDivs[i].classList.add("Active");
        });
    }
}

// Remove "Active" class from all .horizontalDivs
function resetGrid() {
    let horizontalDivs = document.getElementsByClassName("HorizontalDiv");
    for (let i = 0; i < horizontalDivs.length; i++) {
        horizontalDivs[i].classList.remove("Active");
    }
}


spawnGrid(10);



//changeColor();

//function to change color of all fonts in horizontal divs to purple
function changeColor() {
    let horizontalDivs = document.getElementsByClassName("HorizontalDiv");
    for (let i = 0; i < horizontalDivs.length; i++) {
        horizontalDivs[i].style.color = "purple";
    }
}


/*
let newDiv = document.createElement("div");
let newContent = document.createTextNode("!");
newDiv.appendChild(newContent);

let currentDiv = document.getElementById("MainDiv");
currentDiv.appendChild(newDiv);
*/