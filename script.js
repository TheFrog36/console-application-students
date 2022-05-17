const prompt = require('prompt')
const model = require('./model')
const readWriteFile = require('./readWriteFile.js')

prompt.start()
const arrayOfStudents = readWriteFile.readFile('./studentList.json')

function startMenu(){
    console.log('Choose an option:');
    console.log('1) Add new student');
    console.log('2) Print student list');
    console.log('3) Exit program');
    prompt.get(['choice'], function(err, result){
        startMenuMenager(result.choice);
      });
}

function startMenuMenager(choice){
    switch(choice){
        case '1':
            addStudent();
            break;
        case '2':
            printAllStudents();
            startMenu();
            break;
        case '3':
            process.exit();
            break;
        default:
            console.log('Invalid choice, retry');
            startMenu();
    }
}

function addStudent(){
    const schema = {
        properties: {
            name:{
                message: 'Name: '
            },
            surname:{
                message: 'Surname: '
            },
            yob:{
                message: 'Year of birth '
            }
        }
    }
    prompt.get(schema, createStudent);
}

function createStudent(err, result){
    const student = new model.Student(result.name, result.surname, result.yob)
    arrayOfStudents.push(student)
    readWriteFile.writeFile('./studentList.json', arrayOfStudents)
    startMenu()
}

function printAllStudents(){
    for(const student of arrayOfStudents){
        console.log(student.toString())
    }
}

startMenu();
