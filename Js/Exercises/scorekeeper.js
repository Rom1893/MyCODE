const p1 = {
    pts: 0,
    button: document.querySelector("#p1Button"),
    score: document.querySelector("#p1Score"),
}

const p2 = {
    pts: 0,
    button: document.querySelector("#p2Button"),
    score: document.querySelector("#p2Score"),
}


const updateScores = (player, opponent) => {

    if (!isGameOver) {
        player.pts += 1;
        if (player.pts === winningScore) {
            isGameOver = true;
            player.score.classList.add("has-text-success")
            opponent.score.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.score.textContent = player.pts;
    }


}


const resetButton = document.querySelector("#reset")
const playTo = document.querySelector("#playTo")
let winningScore = 3;
let isGameOver = false;

const reset = () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.pts = 0;
        p.score.textContent = 0;
        p.score.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled = false;

    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2)

})

p2.button.addEventListener("click", function () {
    updateScores(p2, p1)

})

resetButton.addEventListener("click", reset)

playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value)
    reset();

})

