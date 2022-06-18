function Person (name, gender){
    this.name = name;
    this.gender = gender;
}

function Student (name, gender, school){
    // console.log(this)
    Person.call(this, name, gender);
    // console.log(this)
    this.school = school;
    // console.log(this)
}

function Employee (name, gender, company){
    // console.log(this)
    Person.apply(this, [name, gender]);
    // console.log(this)
    this.company = company;
    // console.log(this)
}
// var ss = new Person('태언', 'male')
var by = new Student('보영','female', '단국대')
var jn = new Employee('재난','male', '구골')
// console.log(jn)