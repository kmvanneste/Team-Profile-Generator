// TODO: Write code to define and export the Employee class
class Employee {
    constructor(position, name, id, email) {
        this.position = position;
        this.name = name;
        this.id = id;
        this.email = email; 

inquirer.prompt([
    {
        type: "input",
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
})



    }
}