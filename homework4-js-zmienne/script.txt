// Zadanie 1
// a)
const nameName = "Karol"
// b)
const age = 40
// c)
const isOpen = true
// d)
const stringBoolean = "true"
// e)
const stringNumber = "100"

// Zadanie 2
// a)
console.log('Michał')
// b)
console.log('Hello Ania')
// c)
console.log(4)
// d)
console.log(false)

// Zadanie 3
// a)
console.log(nameName)
// b)
console.log(age)
// c)
console.log(isOpen)
// d)
console.log(stringBoolean)
// e)
console.log(stringNumber)


// Zadanie4
// a)
console.log(2 + 2)
// b)
console.log("Michał " + "Kowalski")
// c)
console.log(2 + 2 * 2)

// Zadanie 5
console.log("wynik, " + (7 + 5) + " <---")

// Zadanie 6
let Change = 5;
Change = true;
Change = "Devstock Academy";
console.log(Change)

// Zadanie 7
// a)
const sum = function () {
    return 2 + 2
}
// b)
const helloWorld = function () {
    return "Hello World!"
}
// c)
const returnTrue = function () {
    return true
}
// d)
const modulo = function () {
    return 6 % 4
}
// e)
const pow = function () {
    return Math.pow(3, 4)
}
// f)
const hello = function () {
    return "Hello! " + "How are you?"
}
// g)
const calc = function () {
    return 5 * 60
}
// h)
const calc2 = function () {
    return 3 * 3600
}
// i)
const calc3 = function () {
    return 10 * 9 / 2
}
// j)
const calc4 = function () {
    return 200 - 10
}

// Zadanie 8
// a)
const arr = [1, 2, 3]
// b)
const arr2 = ["Honda", "Volkswagen", "Kia", "BMW", "Audi"]
// c)
const arr3 = [true, false, true]
// d)
const arr4 = []
// e)
const arr5 = [true, "Devstock", 36, "76", false]
// f)
console.log(arr5[1])

// g) właściwość .length służy do wyświetlania długości tablicy
const arr6 = ["Pierwszy", "Drugi", "Trzeci"]
console.log(arr6.length)

// h) tworzenie pustej tablicy i dodawanie elementu
const arr7 = new Array()
arr7.push('Element')
console.log(arr7)

// Zadanie 9
// a)
let object = {}
// b)
let person = {
    name: "Iza"
}
// c)
let personDetails = {
    name: "Tomasz",
    age: 20,
    drivingLicence: true
}
// d)
console.log(personDetails.age)
// e)
console.log(personDetails)

// Zadanie 10

// a)
const sum2 = function(a,b) {
    return a + b
}

// b)
const returnSentence = function(sentence) {
    return String (sentence)
}

// c)
const returnBoolean = function(boolean) {
    return Boolean(boolean)
}

// d)
const divide = function(a,b) {
    return a/b
}

// e)
const pow2 = function(a,b) {
    return Math.pow(a,b);
}

// f)
const returnSentence2 = function(s1,s2) {
    return s1 + s2
} 

// g)
const minToSec = function(min) {
return min * 60
}

// h)
const hrsToSec = function(hrs) {
    return hrs * 3600
}

// i)
const triangleArea = function(trHeight, trWidth){
    return trHeight * trWidth * 0.5
}

// j)
const yrsToDays = function(yrs) {
    return yrs*365
}

// k)
const pow3 = function(powNumber) {
    return Math.pow(powNumber, powNumber)
}

// l)
const triangleSide = function(side1, side2){
    return  (side1 + side2) - 1
}

// m)
const helloUser = function(userName) {
    return "Cześć, " + userName + "!"
}

// n)
const userAge = function(dateOfBirth) {
    return 2021 - dateOfBirth
}

const userScore = function(throw2p, throw3p) {
    return "Your score is " + ((throw2p*2) + (throw3p*3)) + " points!"
}