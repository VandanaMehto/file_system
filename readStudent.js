const  fs = require('fs')

// Read the student.json file
fs.readFile('student.json', function(err, data) {

    // check the error
    if(err) throw err

    // converting to json
    const student = JSON.parse(data)

    // console.log(student)
    console.log(student)
});