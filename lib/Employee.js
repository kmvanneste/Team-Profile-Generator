// TODO: Write code to define and export the Employee class
// const managerClass = require("./lib/Manager.js");
// const engineerClass = require("./lib/Engineer.js");
// const internClass = require("./intern.js");

class Employee {
    constructor(position, name, id, email) {
        this.position = position;
        this.name = name;
        this.id = id;
        this.email = email; 

inquirer.prompt([
    {
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
        message:"What is your role in the company?",
        name: "position",
    },
    {
        type: "input",
        message:"What is your full name?",
        name: "name",
    },
    {
        type: "input",
        message:"What is your ID number?",
        name: "id",
    },
    {
        type: "input",
        message:"What is your email address?",
        name: "email",
    },
]).then(function(response){
    this.position = response.position;
    this.name = response.name;
    this.id = response.id;
    this.email = response.email;
    if (this.position === "Manager") {
        fs.appendFile("manager.html", Manager(response), function(error){
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success! The team has a manager.");
        }) 
    } else if (this.position === "Engineer") {
        fs.appendFile("engineer.html", Engineer(response), function(error){
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success! Added an Engineer to the team.");
        }) 
    } else if (this.position === "intern") {
        fs.appendFile("intern.html", Intern(response), function(error){
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success! Added an intern to the team.");
        }) 
    }
})

    }
}