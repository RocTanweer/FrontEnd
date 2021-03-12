// The methods

let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabit says '${line}'`)
}

// console.log(rabbit.speak('hello'))

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = {
    type : 'white',
    speak : speak
}

let fatRabbit = {
    type : 'fat',
    speak : speak
}


let ar = ['I am like snow'];
let arr = speak.apply(whiteRabbit, ar)
console.log(arr)


// Use of methods as HOF

function transparentWrapping(f){
    return function(){
        return f.apply(null, arguments)
    }
}

function multi(x,y,z,p){
    return x + y + z + p
}


let ktaHai = transparentWrapping(multi)


console.log(ktaHai(1,2,3,4))


// prototypes

let empty = {};
console.log(empty.toString())


console.log(Object.getPrototypeOf(Function.prototype))

let protoRabbit = {
    speak : function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let killerRabbit = Object.create(protoRabbit);
console.log(killerRabbit)
killerRabbit.type = 'killer';

console.log(killerRabbit.speak('SKYREE'))

// constructor

function Rabbit(type) {
    this.type = type;
}


let killerrabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}

console.log(blackRabbit.speak('I am a MenInBlack'))
console.log(killerRabbit.speak('I am a MenInBlack'))
console.log(Object.getPrototypeOf(killerRabbit))
console.log(killerRabbit.__proto__)
console.log(Rabbit.prototype)


let map = {
    'pizza' : 12,
    'touchedTree' : 17
};

Object.defineProperty(
    Object.prototype, 'nonSense', {enumerable:false, value: 2}
);
for(var naam in map){
    console.log(naam)
}
console.log('nonSense' in map)

let newProto = {
    'roc': 1,
    jump : function(){
        console.log('jumping')
    }
}

let instance = Object.create(newProto)
instance.jump = 2;
console.log(instance.jump)