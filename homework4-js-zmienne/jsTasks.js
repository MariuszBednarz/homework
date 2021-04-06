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
function sum() {
    return 2 + 2
}
// b)
function helloWorld() {
    return "Hello World!"
}
// c)
function returnTrue() {
    return true
}
// d)
function modulo() {
    return 6 % 4
}
// e)
function pow() {
    return Math.pow(3, 4)
}
// f)
function hello() {
    return "Hello! " + "How are you?"
}
// g)
function calc() {
    return 5 * 60
}
// h)
function calc2() {
    return 3 * 3600
}
// i)
function calc3() {
    return 10 * 9 / 2
}
// j)
function calc4() {
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
function sum2(a,b) {
    return a + b
}

// b)
function returnSentence(sentence) {
    return String(sentence)
}

// c)
function returnBoolean(boolean) {
    return Boolean(boolean)
}

// d)
function divide(a,b) {
    return a/b
}

// e)
function pow2(a,b) {
    return Math.pow(a,b);
}

// f)
function returnSentence2(s1,s2) {
    return s1 + s2
} 

// g)
function minToSec(min) {
return min * 60
}

// h)
function hrsToSec(hrs) {
    return hrs * 3600
}

// i)
function triangleArea(trHeight, trWidth){
    return trHeight * trWidth * 0.5
}

// j)
function yrsToDays(yrs) {
    return yrs*365
}

// k)
function pow3(powNumber) {
    return Math.pow(powNumber, powNumber)
}

// l)
function triangleSide(side1, side2){
    return  (side1 + side2) - 1
}

// m)
function helloUser(userName) {
    return "Cześć, " + userName + "!"
}

// n)
function userAge(dateOfBirth) {
    return 2021 - dateOfBirth
}

// o)
function userScore(throw2p, throw3p) {
    return "Your score is " + ((throw2p*2) + (throw3p*3)) + " points!"
}