class Student {
    constructor(name, surname, yob){
        this.name = name;
        this.surname = surname;
        this.yob = yob
    }

    toString(){
        return 'Name: ' + this.name + '\n' +
        'Surname: ' + this.surname + '\n' +
        'Yearh of birth: ' + this.yob + '\n';
    }
}

exports.Student = Student