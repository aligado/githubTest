console.log("abbbb");
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}
console.log(Animal);
var ttt = new Animal();
var aa = new ttt();
for (var i in aa) {
    console.log(i);
}