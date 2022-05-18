
const btn = document.querySelector("#button")
const titulo = document.querySelector("#h1")

btn.addEventListener("click", () => {
    const randomizer = Math.floor(Math.random() * 255)
    const randomizer2 = Math.floor(Math.random() * 255)
    const randomizer3 = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`
    titulo.innerText = `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`
})

const randomcolor = () => {
    const randomizer = Math.floor(Math.random() * 255)
    const randomizer2 = Math.floor(Math.random() * 255)
    const randomizer3 = Math.floor(Math.random() * 255)
    return `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`
}

