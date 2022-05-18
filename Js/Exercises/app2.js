function capitalize(word) {

    let firstLetter = word[0];
    let leftoffword = word.substring(1); // should use slice
    return firstLetter.toUpperCase() + leftoffword;


}

function returnDay(day) {
    if (day < 1 || day > 7) {
        return null;
    }

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return week[day - 1]
}









//Sumar todos los numeros en el array
function sumArray(array) {
    let totol = 0;
    for (let i = 0; i < array.length; i++) {
        totol += array[i]

    }
    return totol;
}



for (i = 0; i < array.length; i++) {
    console.log(array[i])
}

let array = [2, 3, 4, 5]



function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }

}

function multiply(num1, num2) {
    return num1 * num2;

}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}


//last element of the array

function lastElement(array) {
    if (array.length === 0) {
        return null;
    }

    return array[array.length - 1];
}

l