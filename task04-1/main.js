//l

// Task4 -1
// Create Class with methods
// Class Flower: Properties:
//  Type (like Rose), Color, Amount ( how many), inStore ( false/true)
// Methods:
// change Amount, change color, change is inStore false/True
// Change color, amount, instore
// OUTPUT: Original situation:
// Flower { Type: 'Rose', Color: 'Red', Amount: 5, inStore: Yes }
//       After changes:
// Flower { Type: Rose , Color: Yellow , Amount: 4 , inStore: No }

//what are class properties??
class Flower {
  constructor(type, color, amount, instore) {
    this.type = type;
    this.color = color;
    this.amount = amount;
    this.instore = instore;
  }
  getFlower () {
    return `${this.type}`
  }
}
const flower = new Flower('rose');
flower.getFlower();
// myFlower = new Flower('Rose', 'Yellow', 4, 'no');
//   console.log('after changes.. ', myFlower);
