#! /usr/bin/env node 
import inquirer from "inquirer";


const randomNumber: number = Math.floor(10000 + Math.random() * 9000)
let myBalance : number = 0


let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function(value) {
                if (value.trim() !== "") {
                return true;
            } 
            return "Please enter a non-empty value.";
            },
        },   
        {   
            name: "courses",
            type: "list",
            message: "Select the course to enrolled:",
            choices:["MS.office","HTML","JavaScript","TypeScript","python"]
        }
    ]
);

const tutionFee: {[key:string]:number} = {
    "MS.office": 2000,
    "HTML": 2500,
    "JavaScript": 6000,
    "TypeScript": 6000,
    "python": 10000,
};
console.log(`\nTution Fees:${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select the payment type:",
        choices:["Cash","Card","Essypaisa"]
    },
    {   name: "amount",
        type: "input",
        message: "Transfar Mony:",
        validate: function(value){
           if (value.trim() !== ""){
            return true;
           } 
           return "Please enter a non-empty value";
        
        },

    }
]);
console.log(`\nYou Select payment Mathod ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymantAmount = parseFloat(paymentType.amount)

if (tutionFees === paymantAmount) {
    console.log(`Congratulation, you have successfuly enrolled in ${answer.courses}\n`);

let ans = await inquirer.prompt([

        {
            name: "Select",
            type: "list ",
            message: "what would you like to next?",
            choices: ["View Status","Exit"],
        }  
])
if (ans.Select === "View Status") 
    console.log("\n**************Status****************\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees Paid: ${paymantAmount}`);
    console.log(`Balance: ${myBalance += paymantAmount}`);

} else {
    console.log("\nExiting Student Management System\n");
}
