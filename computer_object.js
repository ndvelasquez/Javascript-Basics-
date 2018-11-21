let computer = {
  _turnOn: false,
  brand: 'IBM',
  monitor: true,
  model: 'SuperX 2340M',
  components: {
    _motherboard: 'IBM',
    _cpu: 'Intel',
    memory: 8,
    hdd: 500
  },
  periferals: {
    mouse: true,
    keyboard: true,
  },
  greet(){
    if(this._turnOn == false){
      console.log('Turn on the computer first!');
    }
    else {
      console.log('Hello World!');
    }
  },
  get turnOn() {
    return this._turnOn;
  },
  set turnOn(startButton){
    if(typeof startButton === 'boolean'){
      if(this._turnOn === startButton){
        this._turnOn = startButton;
      }

    }
    else{
      console.log('Did you pressed the button?');
    }
  }

};

const pressButton = () =>{
  if(computer._turnOn == false){
    computer._turnOn = true
    return 'Computer is turning on...';
  }
  else {
    return 'Computer is turning off...';
  }
};
//console.log(pressButton());
console.log(Object.entries(computer));
computer.greet();
const {components} = computer;//I used the Destructured Assignment to search the components into the computer / Usé la asignación destructurada para buscar los componentes dentro del computador
console.log(components)
