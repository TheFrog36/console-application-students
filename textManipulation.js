const model = require('./model.js')

function jsonToArrayOfObject(jsonFile){
    const array = JSON.parse(jsonFile)
    const objArray = []
    for(const obj of array){
        const student = new model.Student(obj.name, obj.surname, obj.yob)
        objArray.push(student)
    }
    return objArray
}

exports.jsonToArrayOfObject = jsonToArrayOfObject