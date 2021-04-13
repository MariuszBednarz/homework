//przy zadaniach które tego wymagają dodałem testowe obiekty i tablice, dzięki którym sprawdzałem funkcje.

// 1.
// a)
function sum3(a, b, c) {
    return a + b + c
}

// b)
function triangleArea(wid, hei) {
    area = wid * hei / 2
    return `Pole trójkąta to ${area}, czyli ma on ${wid} długości podstawy i ${hei} wysokości`
}

// c)
function drivingLicense(age, exam) {
    LicenseYear = age - exam
    return `Masz ${age} lat, a egzamin zdałeś w ${exam}. Prawo jazdy masz od ${LicenseYear} lat`
}


// d)
function fuelCost(fuelUse, distance) {
    cost = fuelUse * distance / 100
    return `Przejechałeś ${distance} kilometrów. Przy spalaniu ${fuelUse} l na 100 km, zużyłeś ${cost} litrów benzyny`
}

// e)
function introduction(name, age, children) {
    return `${name} ma ${age} lata i ${children} dzieci`
}

// 2.
// a)

arr = ["element pierwszy", "element drugi", "element trzeci"]

function arrReturn(arr) {
    return Array(arr)
}

// b)
function arrElementReturn(arr) {
    return arr[1]
}

// c)
function arrDescription(arr) {
    return `Przekazana tablica ma ${arr.length} elementy/ów, a elementem nr 3 jest "${arr[2]}" `
}

// d)

arr2 = []

function addToArr(newElement) {
    arr2.push(newElement)
    return arr2
}

// e)
let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
}

function returnObjectName(object) {
    return object.name
}

// f)
function returnObjectData(object) {
    return `Pan/i ${object.name} ${object.surname} ma ${object.age} lat oraz ${object.height} cm wzrostu`
}

// g)
function modifyObjectAge(object, age) {
    object.age = age
    return object.age
}

// 3.
// a)
function drivingLicenseAge(age, license) {
    if (age > 18 && license == true) {
        return `Może jeździć`
    } else if (age > 18 && license == false) {
        return `Nie ma prawa jazdy (ale może zrobić :))`
    } else {
        return `Nie ma prawa jazdy (jest za młody/a)`
    }
}

// b)
function shopping(info) {
    if (info === 'Kup') {
        return 'Widzę, że chcesz zrobić zakupy!'
    } else if (info === 'Sprzedaj') {
        return 'Możesz tutaj swobodnie sprzedawać'
    } else {
        return 'Nie wybrałeś żadnej z dostępnych opcji - wpisz "Kup" lub "Sprzedaj"'
    }
}

// c)
function numberCheck(number) {
    if (number > 0) {
        return `Liczba jest dodatnia`
    } else if (number < 0) {
        return `Liczba jest ujemna`
    } else {
        return `Liczba jest równa 0`
    }
}

// d)

function numberCheck2(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return `FizzBuzz`
    } else if (number % 3 == 0) {
        return `Fizz`
    } else if (number % 5 == 0) {
        return `Buzz`
    } else {
        return `-`
    }
}

// e)
function ageCheck(age, consent) {
    if (age >= 15 || consent == true) {
        return `Możesz oglądać film`
    } else {
        return `Nie możesz oglądać filmu`
    }
}
// wersja z dodatkowymi komunikatami:
function ageCheck2(age, consent) {
    if (age >= 15) {
        return `Możesz oglądać film`
    } else if (age < 15 && consent == true) {
        return `Możesz oglądać film poniżej granicy wieku, ponieważ masz zgodę rodziców`
    } else {
        return `Nie możesz oglądać filmu`
    }
}

// f)
function ternaryCheck(v) {
    return (v ? `Tak` : `Nie`)
}
// g)
function ternaryCheck2(v) {
    return ((v % 2 == 0) ? `Parzysta` : `Nieparzysta`)
}

// 4.

// a)
let testCar = {
    brand: `Volkswagen`,
    model: `Golf`,
    year: 2019,
    isCabrio: true,

}

function carInfo(object) {
    if (object.year >= 2021) {
        return `Model jeszcze nie jest dostępny`
    } else if (object.year <= 2020) {
        return `Samochód który Cię interesuje to ${object.brand}, model - ${object.model}. Jest to rocznik ${object.year}, a więc ma tylko ${(2021-object.year)} lata. Pojazd ten ${(object.isCabrio?"jest kabrioletem":"nie jest kabrioletem")}`
    }
}

//dodałem info ile lat ma pojazd tak od siebie :)

// b)

let arr3 = ['pierwszy', 'drugi', 'trzeci', 'czwarty']
let arr4 = []

function arrayCheck(arr) {
    if (arr.length == 0) {
        return `Pusta tablica`
    } else {
        return `Tablica ma ${arr.length} elementów`
    }
}

// c)

let testPerson2 = {
    name: `Anna`,
    surname: `Kowalska`,
    age: 26,
    likesBook: true,
    likesTV: true,
    haveTV: true,
}

let testBook = {
    title: `Pan Tadeusz`,
    genre: `powieść`,
    pages: 500
}

function whatShouldDo(person, book) {
    if (person.likesBook == true) {
        return `Cześć ${person.name}, powinieneś/powinnaś poczytać książkę, na przykład ${book.title}, z gatunku ${book.genre} - ma tylko ${book.pages} stron.`
    } else if (person.likesBook == false && (person.haveTV == true && person.likesTV == true)) {
        return `Cześć ${person.name}, skoro nie lubisz książek, może pooglądasz telewizję?`
    } else if (person.likesBook == false && (person.haveTV == true && person.likesTV == false)) {
        return `Cześć ${person.name}, skoro nie lubisz ani książek ani telewizji, proponuję iść pobiegać`
    } else if (person.likesBook == false && person.haveTV == false) {
        return `Cześć ${person.name}, skoro nie lubisz książek i nie masz telewizora, proponuję iść pobiegać`
    }
}

//w powyższym zadaniu dodałem nieco więcej warunków wg swojego uznania, mam nadzieję że to czytelne :)