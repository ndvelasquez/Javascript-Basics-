class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    if(daysOff > 20){
      daysOff -= 20;
      const finePerDay = daysOff * 30;
      console.log('You exceed the vacation days by ' + daysOff + '. Now you have a fine for $' + finePerDay);
    }
    else {
     this._remainingVacationDays -= daysOff;
    }
  }

  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
  get insurance() {
    return this._insurance;
  }
  addInsurance(amount){
    this._insurance = amount;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
const doctorDrew = new Doctor('Drew', 5000);
doctorDrew.takeVacationDays(20);
console.log('Doctor: ' + doctorDrew.name + '. ' + doctorDrew.remainingVacationDays + ' vacation days remaining');
doctorDrew.addInsurance(10000);
console.log('Insurance amount: $' + doctorDrew.insurance);
//nurseOlynyk.takeVacationDays(5);
//console.log(nurseOlynyk.remainingVacationDays);
//nurseOlynyk.addCertification('Genetics');
//console.log(nurseOlynyk.certifications);
