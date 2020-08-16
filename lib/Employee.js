// TODO: Write code to define and export the Employee class
// const managerClass = require("./lib/Manager.js");
// const engineerClass = require("./lib/Engineer.js");
// const internClass = require("./intern.js");

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
  }
  module.exports = Employee;