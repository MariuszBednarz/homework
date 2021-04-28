// 1)
console.log("Zadanie 1:")
// sposób 1 - obiekt

const car = {
    brand: 'Volkswagen',
    model: 'Golf',
    yr: 1996,
}

function carInfo(obj) {
    console.log(`sposób 1: Samochód to ${obj.brand}, model ${obj.model} z roku ${obj.yr}`)

}
carInfo(car)

// sposób 2 - lista parametrów
function carInfo2(brand, model, yr) {
    console.log(`sposób 2: Samochód to ${brand}, model ${model} z roku ${yr}`)
}
carInfo2(car.brand, car.model, car.yr)

// 2)
console.log("Zadanie 2:")
//destrukturyzacja
const {
    brand,
    model,
    yr
} = car
console.log(`destrukturyzacja obiektu car: `, brand, model, yr)

// 3) 
console.log("Zadanie 3:")

function carInfo3(obj) {
    const {
        brand,
        model,
        yr
    } = obj
    console.log(`destrukturyzacja w funkcji: Samochód to ${brand}, model ${model} z roku ${yr}`)
}
carInfo3(car)

// 4) 
console.log("Zadanie 4:")
//przy inkrementacji ++x dodajemy +1 przed użyciem zmiennej, a w przypadku x++, po użyciu/odczytaniu zmiennej

// wynik obu operacji jest taki sam (x = x + 1) ale w zależności w którym miejscu jest inkrementacja, program może zadziałać inaczej.

function incr() {
    let x = 5
    let y = 5
    console.log(x++, ` <- wyświetla się 5, ale po inkrementacji x++ rzeczywista wartość to ${x}`)
    console.log(++y, ` <- wyświetla się ${y}, ponieważ inkrementacja została wykonana przed wyświetleniem`)
}
incr()

// 5)
console.log("Zadanie 5:")

function kosz() {
    const wynik = {
        pkt: 0
    }

    function rzutZaDwa() {
        wynik.pkt += 2
    }

    function rzutZaTrzy() {
        wynik.pkt += 3
    }

    function aktualnyWynik() {
        console.log(`wynik gry to ${wynik.pkt}`)
    }
    return {
        pkt: wynik.pkt,
        rzutZaDwa,
        rzutZaTrzy,
        aktualnyWynik,
    }
}

const gra = kosz()
gra.rzutZaDwa()
gra.rzutZaDwa()
gra.rzutZaTrzy()
gra.aktualnyWynik()


// 6)
console.log("Zadanie 6:")
const pralka = {
    nazwa: `Whirpool`,
    funkcje: [`pranie`, ` suszenie`, ` płukanie`],
    information() {
        console.log(`pralka ${this.nazwa}, ma następujące funkcje: ${this.funkcje}`)
    },
}
pralka.information()


// 7)
console.log("Zadanie 7:")

// kopia występuje przy odniesieniu do typów prostych(wartościowych). Każda zmienna ma wartość taką jak w momencie przypisania.
// referencja występuje w typach złożonych - podczas wywołania jest wskazywane miejsce w pamięci gdzie występuje obiekt, dlatego nie jest tworzona kopia, ale referencja.

//typy proste: zmienne proste
//typy złożone: funkcja, tablica, obiekt

let zmienna1 = 1
let zmienna2 = zmienna1
zmienna1 = 2

console.log(`zmienna1 ma wartość ${zmienna1} ponieważ przypisana jest nowa wartość`)
console.log(`zmienna2 ma wartość ${zmienna2} ponieważ odnosi się do pierwotnej wartości zmienna1`)


let x = {
    nr: 1,
}

let y = {
    nr: 2,
}
x.nr = y.nr

console.log(`zmienna x ma wartość ${x.nr} i zmienna y ma wartość ${y.nr}, ponieważ po przypisaniu powstała referencja do tego samego miejsca w pamięci`)