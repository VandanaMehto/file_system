const fs = require('fs')

// reading json file
const student1 = require('./student1')

// Defining new user
let user_Information = {
    user_name: "kabita", 
    user_gmail: "kavita12@gmail.com", 
    language: ["nodejs", "python", "JavaScript"] 
};

// adding new data to student1 object
student1.push(user_Information);

// writing to a file
fs.writeFile('student1.json', JSON.stringify(student1), err => {
    if(err) throw err;
    console.log('Done writing')
})