// Question : 4.
 // write a class to calculate the Uber price.

 class UberPrice{
    constructor(CName,Color,Type,Pickuppoint,Droppingpoint,Distance,kmpercost){
      this.CName = CName
      this.Color = Color
      this.Type = Type
      this.Pickuppoint = Pickuppoint
      this.Droppingpoint = Droppingpoint
      this.Distance = Distance
      this.kmpercost = kmpercost
    }
    getPrice(){
      return `Company Name : ${this.CName}
Car Color : ${this.Color}
Car Type : ${this.Type}
Pickup Point : ${this.Pickuppoint} to Dropping Point : ${this.Droppingpoint}
Cost of 1km : Rs.${this.kmpercost}
Total Distance : ${this.Distance}km
Calculate the Uberprice is RS. ${this.Distance*this.kmpercost}`
    }   
  }
    var u1 = new UberPrice("Uber","Black","Diesel","Aruppukottai","Madurai",45,3);
    console.log("Uber Details");
    console.log(u1.getPrice());
    