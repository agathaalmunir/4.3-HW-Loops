// let iterable = 'Hello, world';
// for(let variable of iterable) {
//     console.log(variable);
// }


// Solve the following problems, you will need to determine which for loop to use, or if one is needed at all:

// Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.

const sum = (n) => {
    let total = 0;
    for (let i = 1; i < n; i++) {
        total += i;
    };
    return total;
};
console.log(sum(4));

// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

//**had trouble setting this up**//
const syllables = (str) => {
    let total = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] = "la") {
            total++;
        }
        
    }
}

console.log(syllables("lalalala"));


// Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.

const addTo = (n) => {
    let total = 0; {
        for(i = 0; i <= n; i++)
            total += i;
    };
    return total;
}

console.log(addTo(4));

// Write a function that takes a string input and console logs each letter.

let example = "hello world";
const letterPrinter = (stringInput) => {
    for (char of stringInput) {
        console.log(char)
    };
}

letterPrinter(example);



// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

const whichCase = (stringInput) => {
    for (char of stringInput) {
        if (stringInput === stringInput.toUpperCase()) {
            console.log("upper")
        }
        else if (stringInput === stringInput.toLowerCase()) {
            console.log("lower")
        }
        else  {
            console.log("mixed")
        }
    }
}


whichCase(example);


// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

//**can't get the counter to work and for the correct prompt to display**//

// const guessingGameTry = Number(prompt("Guess what number I am thinking"));

// const guessingGameCheck = (guessingGameTry) => {
//     let count = 0
//     while (!guessingGameTry || guessingGameTry !== 97) {
//         if (guessingGameTry > 97) {
//             guessingGameTry = Number(prompt("Nope! Try a smaller number"));
//             // count++
//         } else if (guessingGameTry < 97) {
//             guessingGameTry = Number(prompt("Nope! Try a bigger number"));
//             // count++;  
//         } else {
//             prompt("Correct guess!");  
//             break;   
//         }
//     // return count;
//     }         
// };
// guessingGameCheck(guessingGameTry);

// Write a JavaScript for loop that will iterate from 0 to 25. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for (i = 0; i <= 25; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`)
//     }
// };



// Your results should look like this:
// "0 is even"
// "1 is odd"
// "2 is even"

// You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console long something like, "There is room for only ## of books"

// for (i = 0; i <= 80; i++) {
//     console.log(`There is room for only ${80 - i} books on the shelf`);
// };


// Print out a grid of asterisks. Ask the user for the height (rows) and width (columns).
// let gridHeight = Number(prompt('What height do you want the grid of astericks to be?'));

// let gridWidth = Number(prompt('What width do you want the grid of astericks to be?'));


// const gridMaker = (gridWidth, gridHeight) => {
//     for (i = 0; i <= gridWidth; i++) {
//         console.log("*");
//             for (y = 0; y <= gridHeight; i++) {
//                 console.log("*");
//             };
//     };
// };
// gridMaker(gridWidth, gridHeight);

// Write a function that takes a string input, transforms the odd characters to uppercase, and console logs the result of the entire string.
// Example input: "hello" Output: "hElLo"

//Not sure why it just transforms the first letter

let newString = "";
const transformCase = (str) => {
    for (i = 0; i <= str.length; i++) {
        if (str[i] % 2 !== 0) {
             newString += str[i].toUpperCase();
        } else {
             newString += str[i];
        }
    return newString
    }
}
console.log(transformCase("hello"));

// Write a function that accept two integers and displays the larger number.

const scale = (firstNum, secondNum) => {
    if (firstNum > secondNum) {
        return firstNum;
    } else {
        return secondNum;
    };
};

console.log(scale(22,10));


// Write a function that takes in 3 numbers and sorts them from lowest to highest. Display an alert box to show the result.

//I have an error pop up on my else if and on my bracket

// const sortLowToHigh = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         if (num2 > num3) {
//         alert(num3 + " ", num2 + " ", num1);
//         } else {
//             alert(num2 + " ", num3 + " ", num1);
//     } else if (num2 > num1 && num2 > num3) {
//         if (num1 > num3) {
//         alert(num3 + " ", num1 + " ", num2)
//         } else { 
//             alert(num1 + " ", num3 + " ", num2);
//         };
//     } else (num3 > num1 && num3 > num2) {
//         if (num1 > num2) {
//         alert(num2 + " ", num1 + " ", num3)
//         } else { 
//             alert(num1 + " ", num2 + " ", num3);
//         };
//     };
// };
// sortLowToHigh(10,80,2);

// Write a function that takes in a string and removes all vowels from it (a, e, i, o, u), and returns the new string. If the string is empty, break from the loop.

const vowelDelete = (str) => {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };

    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if (str === "") {
            break;
        } else if (!vowels[letter]) {
        newStr += str[i];
        }
    };
    return newStr;
    };

    console.log(vowelDelete("hello"));
// Create a new repo in GitHub and submit the URL.