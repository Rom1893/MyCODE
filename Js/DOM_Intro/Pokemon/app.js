// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");


for (i = 1; i < 152; i++) {
    const block = document.createElement("div")
    const block2 = document.createElement("div")
    block.classList.add("block")
    block2.classList.add("block2")
    const name = document.createElement("h2")
    name.classList.add("name")
    name.innerText = `#${i}`
    const newImg = document.createElement("img");
    newImg.classList.add("newImg")
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(block)
    block.append(block2)
    block2.append(newImg)
    block2.append(name)
}

