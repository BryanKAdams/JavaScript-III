/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Simple Function Call the global object
* 2. Implicit Binding Applies when calling a method on an object
* 3. new Binding using the new keyword constructs a new object that this points to.
* 4.  Explicit Binding tell this to point to a certain value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowTest(name) {
    console.log('Hello my name is ' + name);
    console.log(this);
}
windowTest('Billy');
// Principle 2

// code example for Implicit Binding
const howManyEggs = {
    question: 'How many eggs are there? ',
    answer: function(eggs){
        console.log(this.question + eggs);
        console.log(this);
    }
}
howManyEggs.answer('20');
// Principle 3

// code example for New Binding

function eggContainer(color) {
    this.color = color;
}
let myEggContainer = new eggContainer('Yellow');
console.log(myEggContainer.color);

// code example for Explicit Binding
// Calling
function answer (){
    console.log(this.question + '20');
    console.log(this);
}
const howManyEggsplicit = {
    question: 'How many eggs are there? ',
}
answer.call(howManyEggsplicit);

//applying
function spoopyBeing(){
    console.log(this.spoop);
}
let myspoopyBeing = {
    name: 'Sir Spoopius',
    spoop: 'SPOOOOOOOOOOP',
}
spoopyBeing.call(myspoopyBeing);

//binding

function spoopyEgg(){
    console.log(this.spoopyCrack);
}
let mySpoopyEgg = {
    name: 'The spoopiest yolk',
    spoopyCrack: 'SPOOOOOOOCRRRKKK'
}
spoopyEgg = spoopyEgg.bind(mySpoopyEgg);
spoopyEgg();