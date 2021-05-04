const buttonChoice = document.querySelector(".button");
const gridContainer = document.querySelector("#gridContainer");

 let numOfTimes = buttonChoice;
 numOfTimes.addEventListener("click", () =>{

numOfTimes = prompt("grid size?");
 });
for (let j = 0; j<numOfTimes;j++){
    let rowContainer = document.createElement("div");
    for(let i = 0;i<numOfTimes;i++){
        const singleCell = document.createElement("div");
        singleCell.textContent=".";
        singleCell.style.color="white";
        singleCell.classList.add("bg-red")
        singleCell.classList.add("grid")
        singleCell.addEventListener("mouseover", () => {
            singleCell.style.background="   #2f525d";
            singleCell.style.color="#2f525d"; 
        });
        rowContainer.appendChild(singleCell);
    }
    gridContainer.appendChild(rowContainer);
}


































































// let top_five = ["butterfingers","reeses","snickers", "hersheys", "kitkat", "skittles", "hahah"];

// let character = {
//     hairColor: "red",
//     specialAbility: "breath fire",
//     homeTown: "hadvish, denmark",
//     birthYear: "1245",
// };
// for (let i = 0; i < top_five.length; i++){
//     console.log(top_five[i])
// };
// console.log(character.homeTown);