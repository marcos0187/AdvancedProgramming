const myObj = {
    name: 'Marcos',
    age: 34,
    greeting: function(message){
        console.log(`this is equal: ${JSON.stringify(this)}`),
        console.log(`${message} soy ${myObj.name} y tengo ${myObj.age}`);
    },

};

const student = {
    name: undefined,
    age: undefined,
    greeting: function(message){
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};
const Carlos = Object.create(student);
Carlos.name = 'Carlos Jose';
Carlos.age = 20;
Carlos.greeting('hola mundo');
Carlos.programming = function(problem){
//logic a computing
    console.log('programming solution for', problem);
},
Carlos.programming('Create an amazing web application');