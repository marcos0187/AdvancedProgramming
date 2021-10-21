

const student = {
    name: 'Pedro',
    age: 19,
    greeting: function(message){
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const cpystudent = {...student};
cpystudent.name = 'Fernando';
console.log(student);
console.log(cpystudent);
