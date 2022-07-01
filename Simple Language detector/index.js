import { franc, francAll } from "franc";
import colors from "colors";
import langs from "langs";


const lang = String(process.argv.slice(2));
const trans = franc(lang)

// console.log(lang)
// console.log(trans)
// console.log(langs.where("2B", trans).name);


function detector() {
    if (trans === "und")
        console.log("Please enter a larger sentence".yellow)
    else
        console.log(langs.where("3", trans).name.green);
}

try {
    detector();
}
catch (e) {
    console.log("Oops! something went wrong, lang not found".red)
}