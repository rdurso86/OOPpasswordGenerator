const inquirer = require("inquirer");
const Generator = require("./generator");
const Choices = require("./choices");


let password = new Choices();

password.usersChoice();