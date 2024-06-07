// Question : 3
//Create a class in Person:
class person {
  constructor(
    fname,
    faname,
    email,
    number,
    address,
    gender,
    nationality,
    maritalStatus
  ) {
    this.fname = fname;
    this.faname = faname;
    this.email = email;
    this.number = number;
    this.address = address;
    this.gender = gender;
    this.nationality = nationality;
    this.maritalStatus = maritalStatus;
  }
  getPersonDetails() {
    return `Name : ${this.fname} 
Father Name : ${this.faname} 
Email : ${this.email}
Phone Number :  ${this.number}
Address : ${this.address}
Gender : ${this.gender}
Nationality : ${this.nationality}
Marital Status : ${this.maritalStatus}`;
  }
}
var p1 = new person("Balakrishnan M","Murugan K","krishnabala495@gmail.com",6369216016,"121,EastStreet,Palayampatti","Male","Indian","Single");

console.log("My Details:");
console.log(p1.getPersonDetails());
