// 1 - kod asynchroniczny - wykonuje się nawet pomimo zainicjowanych wcześniej procesów, skraca czas działania dlatego że nie ma potrzeby czekania na zakończenie wcześniej inicjowanych funkcji. Funkcje asynchroniczne mogą 'czekać' na dane i wykonywać się gdy je otrzymają, podczas gdy reszta wykonuje się normalnie.

// 2 i 3

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => {
        console.log('Za pomocą fetch', response.results)
    })
    .catch(err => {
        console.log("Coś poszło nie tak", err)
    })

// 4

const tablicaPostaci = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log('Za pomocą async/await', data.results)
}
tablicaPostaci()

// 5

const jednaPostac = async (nr = 1) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${nr}`)
    const character = await response.json()
    console.log(`Postać o id ${nr} to ${character.name}. Szczegóły: `,character)
}
jednaPostac(8)

