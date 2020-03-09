const inquirer = require("inquirer");
const Generator = require("./generator");
const chalk = require("chalk");


class Choices {

    usersChoice() {
        inquirer.prompt(
            {
                type: "number",
                name: "passwordLength",
                message: "How many characters would you like your password to contain? Please choose a number between 8 and 128.",
            },
          ).then(val => {
            
            let pLength = parseInt(`${val.passLength}`);

            if ((pLength < 8) || (pLength > 128)) {
                console.log(chalk.red("Follow the directions dummy!"));
                password.usersChoice();
            } else {
                password.charChoices();
            }

            password.wordLength = pLength;
        });
    }



charChoices() {
        const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
        const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]
        let passwordArray = [];
    
        inquirer.prompt(
        {
            type: "checkbox",
            name: "Character Choices",
            message: "\nPlease select at least one option to include in your password:",
            choices: [
                "Lowercase Letters", 
                "Uppercase Letters",
                "Numbers", 
                "Symbols", 
            ],
        }
    ).then(answers => {
        let userChoice = answers.charChoices;

        
        if (userChoice.includes("Lowercase Letters")) {
            passwordArray.push(lowercase)   
        }; 
        
        if (userChoice.includes("Uppercase Letters")) {
            passwordArray.push(uppercase)    
        };
        if(userChoice.includes("Numbers")) {
            passwordArray.push(numbers)
        };
                
        if (userChoice.includes("Symbols")) {
            passwordArray.push(symbols)
        }; 

        password = passwordArray;

    });

}};

let password = new Choices();

module.exports = Choices;