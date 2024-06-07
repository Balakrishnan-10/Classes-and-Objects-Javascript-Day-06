// Question : 2
//Create a class in Circle:

class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return `Get the Radius of the circle is ${this.radius}`;
  }

  setradius (n){
     this.radius = n
  }
 
  getColor() {
    return `Get the Color of the circle is ${this.color}`;
  }

  setcolor (c){
    this.radius = c
 }

 getTostring () {
    return `"Circle [radius = ${this.radius}, color = ${this.color}]"`;
  }
  getArea() {
    return `Get the Area of the circle is = ${Math.PI * Math.pow(this.radius,2)}`;
  }
  getCircumference() {
    return `Get the Circumference of the circle is = ${2 * Math.PI * this.radius}`;
  }
 }


let c1 = new circle(1.0, "red");
console.log(`Radius = ${c1.radius} , Color = ${c1.color}`);
// Getter Method:
console.log(c1.getRadius());
console.log(c1.getColor());
console.log(c1.getTostring());
console.log(c1.getArea());
console.log(c1.getCircumference());
// setter Method:
c1.radius = 3;
console.log("Radius = "+ c1.radius);
c1.color = "Yellow";
console.log("Color = "+ c1.color);







