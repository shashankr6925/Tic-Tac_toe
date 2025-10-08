let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGame = document.querySelector("#newGame")
let  messagebox = document.querySelector(".messagebox");
let  message = document.querySelector("#msg");

let count = 0 ;
let turnO = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    let turnO = false;
    enableBoxes();
    messagebox.classList.add("hide")
    count = 0 ;


}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked")
        if (turnO) {
            box.innerText = "O"
            box.style.color = "green"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
            box.style.color = "red"
        }
        box.disabled = true;

        count ++
        checkWinner();


        if(count === 9 && messagebox.classList.contains ("hide")){
            message.innerText = ("It's a draw . Play Again")
            console.log("draw")
            messagebox.classList.remove("hide");


        }
    });
});



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor ="";
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`
    messagebox.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val == pos3val) {
                boxes[pattern[0]].style.backgroundColor = "yellow"
                boxes[pattern[1]].style.backgroundColor = "yellow"
                boxes[pattern[2]].style.backgroundColor = "yellow"

                console.log("winner is", pos1val)
                showWinner(pos1val);
            }
        }

    }
}


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
