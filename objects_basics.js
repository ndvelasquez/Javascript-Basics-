//THIS IS A ROBOT FACTORY. TO PRACTICE THE BASIC KNOWLEDGE ABOUT OBJECTS CREATION, METHODS, BUILT-IN METHODS, ETC.

//A basic object creation and some of it's characteristics / una creación básica de un objeto y sus características.
let robot = {
  _model: 'R2-D2',
  _energyLevel: 100,
  _active: true,
  components:{
    _numOfSensors: 120,
    battery: 'Lithium'
  },
  sayHi(){
    console.log(`Hello, my name is ${this.model}`);
  },
  'default action': ['DANCE!!','Auto mode','Anithing you want']
}
//You can know all the object keys with his value / puedes saber todas las claves del objeto y su valor
Object.entries(robot);
//you can copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. / puedes copiar los valores con sus mismas propiedades de uno o mas objetos fuente a un objeto objetivo.
const newRobot = Object.assign({blaster: true, voiceRecognition: true}, robot);

const robotFactory = (model,active) =>{
  return{
    model,
    active,
    energy: 100,
    greet(){
      console.log('Hi there!');
    }
  }
}

const anotherRobot = robotFactory('AAA-001',true)
console.log(anotherRobot.name);
