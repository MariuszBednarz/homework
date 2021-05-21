const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1
const reduceArray = array.reduce(function (acc, item) {
    return acc + item
}, )
console.log(reduceArray)

// 2
const array2 = array.filter(function (i) {
    return i % 2 === 0
})
const reduceArrayEven = array2.reduce(function (acc, i) {
    return acc + i
})
console.log(reduceArrayEven)

// 3

const reduceArrayInit = array.reduce(function (acc, item) {
    return acc + item

}, 10)
console.log(reduceArrayInit)

// 4
// jeśli dodamy initial Value, będzie on accumulatorem, jeśli nie, pierwsza wartość w tablicy będzie accumulatorem

// 5
// jeśli dodamy initial Value, pierwsza wartość w tablicy mimo to będzie mieć index 0

// 6

function myReduce(prev, next) {
    let v = next
    for (i = 0; i < array.length; i++) {
        const item = array[i]
        v = prev(v, item)
    }
    return v
}

const reducedArr = myReduce(function (acc, next) {
    return acc + next
}, 0)

console.log(reducedArr)

// 7
const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

function biggerThan50(element, index, array) {
    return element > 50
}
console.log(someArray.some(biggerThan50))

// 8
function biggerThan2(element, index, array) {
    return element > 2
}
console.log(someArray.every(biggerThan2))

// 9
// some zwraca true jeśli choć jeden element spełnia warunek
// every zwraca true jeśli wszystkie elementy spełniają warunek

// 10
function divBy7(element, index, array) {
    return element % 7 === 0
}
console.log(someArray.some(divBy7))

// 11
const arrSome = [1, 2, 3]

function mySome(element, condition) {
    for (i = 0; i < element.length; i++) {
        if (element[i] == condition) {
            return true
        }
    }
    return false
}

mySome(arrSome, 1)

// 12
const arrEvery = [2, 2, 2]

function myEvery(element, condition) {
    for (i = 0; i < element.length; i++) {
        if (element[i] !== condition) {
            return false
        }
    }
    return true
}

myEvery(arrEvery, 2)

// 13
const testArray = [1, 4, 5, "string", 83, "innyString"]

const testedArray = testArray.filter(function (item) {
    return typeof item === "number"
}).reduce(function (prev, next) {
    return prev + next
}, 0)

console.log(testedArray)

// 14
array3 = [1, 2, 3, 4, 5]

function redMinus(array, init) {
    return array.reduce(function (acc, item) {
        return acc - item
    }, init)

}
console.log(redMinus(array3, 2))

// 15
function valueCheck(array, value) {
    return array.some(function (element, index, array) {
        return element == value
    })
}

console.log(valueCheck(array3, 1))

// 16
const Car = function (model, yearOfProduction, color, drive) {
    this.model = model,
        this.yearOfProduction = yearOfProduction,
        this.color = color,
        this.drive = () => console.log("jazda!")
}
const Golf = new Car("Golf", "1996", "blue");
const Suzuki = new Car("SX4", "2004", "grey")
// 17
// New używamy aby stworzyć nową instancję obiektu, w oparciu np o konstruktor
// 18
Car.prototype.tankFuel = () => console.log("tankowanie")
Car.prototype.stop = () => console.log("stop")