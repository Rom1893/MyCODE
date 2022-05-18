let input = prompt("What would you like to do")
const todos = ["collect games", "pegar aupi"]

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("**********")
        for (dos of todos) {
            console.log(`${todos.indexOf(dos) + 1}: ${dos} `)
        }
        console.log("**********")
    } else if (input === "new") {
        const newTodo = prompt("What would you like to add");
        todos.push(newTodo);
        console.log(`${newTodo} added to your list`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Enter index to delete"))
        if (Number.isNaN(index)) {
            const index = parseInt(prompt("Enter a valid index to delete"))
        }
        else {
            let nolonger = todos.splice((index) - 1, 1);
            console.log(`${nolonger} is no longer in your To do list`)
        }
    }



    input = prompt("What would you like to do")
}
console.log("aight, you quit the app")