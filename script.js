let boxes = document.querySelectorAll(".box");
let winnerName = document.querySelector("h2");
let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", ()=>{
    
        location.reload();
    }
)
let winner;

let turn = 1;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turn === 1) {
                box.innerText = "X";
                turn = 0;
            }
            else {
                box.innerText = "0";
                turn = 1;
            }

        }
        checkWinner();
    })

})

let winPatterns = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
];



checkWinner = () => {
    for (let patterns of winPatterns) {
        let vp1 = boxes[patterns[0]];
        let vp2 = boxes[patterns[1]];
        let vp3 = boxes[patterns[2]];
        

        if (vp1.innerText != "" && vp2.innerText != "" && vp3.innerText != "") {
            if (vp1.innerText === vp2.innerText && vp2.innerText === vp3.innerText) {
                console.log("WINNER!");
                boxes.forEach((box) => {
                    box.disabled = true;
                    let winner = vp1.innerText === "X" ? "Player 1" : "Player 2";

                    winnerName.innerText=`Winner is : ${winner}`;
                    vp1.style.backgroundColor="red";
                    vp1.style.color="white";

                    vp2.style.backgroundColor="red";
                    vp2.style.color="white";

                    vp3.style.backgroundColor="red";
                    vp3.style.color="white";

                    
                    

                })
            }
        }
    }
}