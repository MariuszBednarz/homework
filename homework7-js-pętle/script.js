// 1)
console.log("Zadanie 1a: odliczanie od 1 do 9")

function loop1() {
    for (i = 1; i < 10; i++) {
        console.log(i)
    }
}
loop1()

console.log("Zadanie 1b: odliczanie od 9 do 1")

function loop2() {
    for (i = 9; i > 0; i--) {
        console.log(i)
    }
}
loop2()

console.log("Zadanie 1c: odliczanie od 5 do 15")

function loop3() {
    for (i = 5; i <= 15; i++) {
        console.log(i)
    }
}
loop3()

console.log("Zadanie 1d: odliczanie od 0 do -10")

function loop4() {
    for (i = 0; i >= -10; i--) {
        console.log(i)
    }
}
loop4()

console.log("Zadanie 1e: odliczanie od 1 do 20, iteracja 2")

function loop5() {
    for (i = 0; i <= 20; i += 2) {
        console.log(i)
    }
}
loop5()

console.log("Zadanie 1f: odliczanie od 10 do -10, iteracja 4")

function loop6() {
    for (i = 10; i >= -10; i -= 4) {
        console.log(i)
    }
}
loop6()

console.log("Zadanie 1g: odliczanie od 0 do 100, iteracja * 2")
//udało się od zera, z prostą instrukcją warunkową - pierwsza iteracja musiała być +1 :)
function loop7() {
    for (i = 0; i <= 128;
        (i == 0 ? i++ : i = i * 2)) {
        console.log(i)
    }
}
loop7()

// 2)
console.log("Zadanie 2a: odliczanie od 0 do 20, parzyste")

function loop8() {
    for (i = 0; i <= 20; i++) {
        i % 2 == 0 ? (console.log(i)) : ''
    }
}
loop8()

console.log("Zadanie 2b: odliczanie od 0 do 20, nieparzyste")

function loop9() {
    for (i = 0; i <= 20; i++) {
        i % 2 !== 0 ? (console.log(i)) : ''
    }
}
loop9()

console.log("Zadanie 2c: odliczanie od 0 do 10, informacja o parzystych/nieparzystych")

function loop10() {
    for (i = 0; i <= 10; i++) {
        i % 2 == 0 ? console.log(`parzysta`) : console.log(`nieparzysta`)
    }
}
loop10()

console.log("Zadanie 2d: odliczanie od 0 do 30, podzielne przez 3 i 5")

function loop11() {
    for (i = 0; i <= 30; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
loop11()

console.log("Zadanie 2e: odliczanie od 100 do 0, podzielne przez  10")

function loop12() {
    for (i = 100; i > 0; i -= 5) {
        i % 10 == 0 ? console.log(`${i} - podzielna przez 10`) : console.log(i)
    }
}
loop12()

console.log("Zadanie 3a: odliczanie od 0 do podanej wartości")

function countToValue(v) {
    for (i = 0; i <= v; i++) {
        console.log(i)
    }
}

countToValue(5)

console.log("Zadanie 3b: odliczanie od podanej wartości do 15")

function countFromValue(v) {

    for (i = v; i <= 15; i++) {
        v >= 15 ? console.log("podaj cyfrę poniżej 15") : console.log(i)
    }
}

countFromValue(5)
countFromValue(15)
//dodałem zabezpieczenie w razie podania zbyt wysokiej cyfry

console.log("Zadanie 3c: odliczanie od 0 do 15, liczba wzrostu podana jako parametr")

function countBy(v) {
    for (i = 0; i <= 15; i += v) {
        console.log(i)
    }
}
countBy(3)

console.log("Zadanie 3d: odliczanie od/do podanych wartości")

function countFromToValue(from, to) {
    for (i = from; i <= to; i++) {
        console.log(i)
    }
}
countFromToValue(3, 12)

console.log("Zadanie 3e: odliczanie od/do podanych wartości, liczba wzrostu podana jako parametr")

function countFromToBy(from, to, v) {
    for (i = from; i <= to; i += v) {
        console.log(i)
    }
}
countFromToBy(7, 56, 7)

console.log("Zadanie 4a: wyświetlanie tablicy")

const arr = ["1st", "2nd", "3rd", "4th"]

function arrLoop() {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
arrLoop()

console.log("Zadanie 4b: wyświetlanie tablicy w stringu")

const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]

function arrNamesLoop() {
    for (i = 0; i < arrNames.length; i++) {
        console.log(`Cześć ${arrNames[i]}!`)
    }
}
arrNamesLoop()

console.log("Zadanie 4c: wyświetl obiekty w stringu")

const arrObjects = [{
    brand: "Mustang",
    color: "niebieski"
}, {
    brand: "Tesla",
    color: "czarna"
}, {
    brand: "Polonez",
    color: "żółty"
}, {
    brand: "Toyota",
    color: "fioletowa"
}]

function arrObjectLoop() {
    for (i = 0; i < arrObjects.length; i++) {
        console.log(`Przed Tobą stoi ${arrObjects[i].color} ${arrObjects[i].brand} `)
    }
}
arrObjectLoop()

console.log("Zadanie 4d: wyświetl parzyste elementy tablicy")

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNumbersLoop() {
    for (i = 0; i < arrNumbers.length; i++) {
        arrNumbers[i] % 2 == 0 ? console.log(arrNumbers[i]) : ''
    }
}
evenNumbersLoop()

console.log("Zadanie 4e**: sprawdzenie typu i wyświetlenie string")

const arrRandom = [1, true, "String", false, "String2", {
    value: 5
}, 77, "String3"]

function chceckIfString() {
    for (i = 0; i < arrRandom.length; i++) {
        if (typeof arrRandom[i] === "string") {
            console.log(arrRandom[i])
        }
    }
}
chceckIfString()

console.log("Zadanie 4f**: sprawdzenie typu i wypchnięcie typu number do nowej tablicy")

const arrNew = []

function chceckIfNumber() {
    for (i = 0; i < arrRandom.length; i++) {
        if (typeof arrRandom[i] === "number") {
            arrNew.push(arrRandom[i])
        }
    }
}
chceckIfNumber()
console.log(`stara tablica zawierała:`, arrRandom)
console.log(`nowa tablica zawiera typy number:`, arrNew)

console.log("Zadanie 5a: funkcja sumująca wartości w tablicy")
arrNumbers2 = [5, 5, 5, 5, 10]
arrNumbers3 = [-10, 20, 5]

function arrSum(array) {
    sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(`dodane wartości tablicy to: `, sum)
}
arrSum(arrNumbers2)
arrSum(arrNumbers3)

console.log("Zadanie 5b: funkcja dzieląca parzyste od nieparzystych")

const arrEven = []
const arrOdd = []

function arrSeparator(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrEven.push(array[i])
        } else {
            arrOdd.push(array[i])
        }
    }
}
arrSeparator(arrNumbers)
console.log('tabl. pierwotna', arrNumbers)
console.log('parzyste', arrEven)
console.log('nieparzyste', arrOdd)

console.log("Zadanie 5c: funkcja sprawdzająca czy w stringu jest litera Y")


const word = "ryby"
const word2 = "woda"

function checkStringContent(string) {
    for (i = 0; i < string.length; i++) {
        if (string[i] === "y") {
            feedback = true
        } else {
            feedback = false
        }
    }
    console.log(`W słowie ${string} ${feedback? "jest litera Y":"nie ma litery Y"}`)
}
checkStringContent(word)
checkStringContent(word2)
//Napisałem z użyciem pętli, ale da się też z .includes() :)


console.log("Zadanie 5d: funkcja mnożąca")

function multiply(value) {
    let result = value
    for (i = value - 1; i >= 1; i--) {
        result *= i
    }
    console.log(result)
}
multiply(5)

console.log("Zadanie 5e: konkatenacja w tablicy")

const arrString = ["1st", " 2nd", " 3rd", " 4th", " 5th"]
const arrNumber = [1, 2, 3, 4, 5]
const arrEmpty = []

function conc(arr, string) {

    if (arr == 0) {
        console.log('tablica jest pusta')
    } else if (string === "string") {
        concatContent = ``
        for (i = 0; i < arr.length; i++) {
            concatContent = concatContent + arr[i]
        }
        console.log(`Łączone wartości podanej tablicy z typem string to: ${concatContent}`)
    } else if (string === "number") {
        sum = 0
        for (i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        console.log(`Suma dodanych wartości podanej tablicy z typem number to`, sum)
    } else {
        console.log(`Podaj w drugim parametrze "string" lub "number"`)
    }

}
conc(arrString, "string")
conc(arrNumber, "number")
conc(arrString, "test")
conc(arrEmpty, "number")

console.log("Zadanie 5f: sprawdzenie obiektów w tablicy")

const users = [{
    name: "Tomasz",
    surname: "Kowalski",
    hasLicense: true,
    hasCar: true
}, {
    name: "Karolina",
    surname: "Kowalska",
    hasLicense: true,
    hasCar: false
}, {
    name: "Dominika",
    surname: "Nowak",
    hasLicense: false,
    hasCar: true
}, {
    name: "Kamil",
    surname: "Nowak",
    hasLicense: false,
    hasCar: false
}, ]

function driverCheck(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].hasLicense == true && array[i].hasCar == true) {
            console.log(`${array[i].name} ma prawo jazdy i samochód więc może Cię podwieźć`)
        } else if (array[i].hasLicense == true && array[i].hasCar == false) {
            console.log(`${array[i].name} ma prawo jazdy ale nie ma samochodu`)
        } else if (array[i].hasLicense == false && array[i].hasCar == true) {
            console.log(`${array[i].name} ma samochód, ale nie ma prawa jazdy (bo jeździł/a niezgodnie z prawem)`)
        } else {
            console.log(`${array[i].name} nie ma prawa jazdy ani samochodu`)
        }
    }
}
driverCheck(users)

console.log("Zadanie 5g: sprawdzenie tablicy i dodanie nowego elementu")

const arrLetters = ["a", "b", "c", "d"]

function checkArrayContent(array, newElement) {
    feedback = false;

    for (i = 0; i < array.length; i++) {
        if (array[i] == newElement) {
            feedback = true;
        }
    }
    if (feedback == false) {
        array.push(newElement)
        console.log(`${newElement} dodano do tablicy`)
        console.log(`tablica zawiera:`, array)
    } else {
        console.log(`${newElement} już jest w tablicy`)
        console.log(`tablica zawiera:`, array)
    }
}
checkArrayContent(arrLetters, "a")
checkArrayContent(arrLetters, "e")