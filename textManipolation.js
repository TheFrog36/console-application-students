const model = require('./model.js')

function jsonToArrayOfObject(jsonFile){
    const array = JSON.parse(jsonFile)
    const arrayOfStudents = []
    for(const obj of array){
        const student = new model.Studend(obj.name, obj.surname, obj.yob)
        arrayOfStudents.push(student)
    }
    return arrayOfStudents
}