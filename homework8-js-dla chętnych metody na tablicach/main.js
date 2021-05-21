//1
// a)
let object = {
    name: `Mariusz`,
    age: 30,
    city: `Lublin`,
}

for (const prop in object) {
    console.log(`${prop}: ${object[prop]}`)
}
// b)
const array = [`a`, `b`, `c`, `d`, `e`]

for (const index in array) {
    console.log(array[index])
}

//2
// a)
for (const index of array) {
    console.log(index)
}

// b)
const string = `Hello World!`
for (const item of string) {
    console.log(item)
}

//c
//for in - wyświetla indeksy elementów tablicy. Bardziej przydatna do iteracji na obiektach (po właściwościach)
//for of - wprowadzona w ES6, wyświetla wartości tablicy, nie działa na obiektach, przydatna przy obiektach iterowalnych

// 3
// a)
let x = -5
console.log(x)
while (x < 5) {
    console.log(++x)
}
// b)
let y = -5
console.log(y)
do {
    console.log(++y)
} while (y < 5)

// 4
// a)
const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(function (i) {
    return i * 2
})
console.log(newArr)
// b)

const names = ["Seba", "Kari", "Mati", "Andżi"]

const helloNames = names.map(function (i) {
    console.log(`Cześć ${i}!`)
})

// 5
// a
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2New = array2.filter(function (i) {
    return i % 2 !== 0
})
console.log(array2New)

// b)
const array2New2 = array2.filter(function (i) {
    return i > 5
})
console.log(array2New2)

const people = [{
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
}, {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
}, {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
}, {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
}]

function genderCheck(v) {
    return v.gender === "female"
}
const females = people.filter(genderCheck)
console.log(females)

// 6
array2.forEach(function (i) {
    console.log(--i)
})

// 7
// a)
const str = ["d", "a", "s", "f"]
const strNew = str.sort()
console.log(strNew)
// b)
const array3 = [9, 2, 1, 6, 5, 4, 7, 8, 3]
const array4 = array3.sort()
const array5 = array4.reverse()
console.log(array5)


// 8
//dodałem więcej cyfr powyżej 10
const ar = [9, 2, 1, 6, 5, 4, 7, 8, 3, 11, 23, 45, 21]
const ar2 = ar.map(function (i) {
    return i + 2
})
const ar3 = ar2.filter(function (i) {
    return i > 10
})
const ar4 = ar3.sort()
console.log(ar2)
console.log(ar3)
console.log(ar4)