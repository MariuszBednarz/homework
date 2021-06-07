async function listApp() {
    let page = 1
    let info = null

    const $btnPrev = document.getElementById('prev')
    const $btnNext = document.getElementById('next')


    $btnPrev.addEventListener('click', () => {
        if (info.prev === null) {
            alert('To pierwsza strona')
            return
        }
        page--
        displayList()
    })
    $btnNext.addEventListener('click', () => {
        if (info.next === null) {
            alert('To ostatnia strona')
            return
        }
        page++
        displayList()
    })



    async function fetchChars() {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const response = await data.json()
        return response

    }



    async function displayDescription() {
        const characters = await fetchChars()

    }
    displayDescription()

    function createCharacter(data) {

        const $list = document.getElementById('list')
        const $card = document.createElement('div')
        $card.classList = 'card'

        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = data.name

        const $container = document.createElement('div')
        $container.classList = 'container'

        const $name = document.createElement('h4')
        $name.innerHTML = data.name

        const $species = document.createElement('p')
        $species.innerHTML = data.species

        $list.appendChild($card)

        $card.appendChild($img)
        $card.appendChild($container)

        $container.appendChild($name)
        $container.appendChild($species)
    }

    //opakowałem generowanie aktualnej listy w funkcję zgodnie z sugestią Bartka
    const displayList = async () => {

        const characters = await fetchChars()
        info = characters.info
        const $list = document.getElementById('list')
        $list.innerHTML = ''

        //od siebie dodałem funkcję która na każdej stronie losuje przykładową postać (z danej strony)
        const description = document.getElementById('description')
        description.textContent = (`Na stronie ${page} dostępnych postaci jest ${characters.results.length}, na przykład ${characters.results[Math.floor(Math.random() * (10 - 0))].name} `)

        const allPages = document.getElementById(`allPages`)
        allPages.innerHTML = characters.info.pages
        const currentPage = document.getElementById(`currentPage`)
        currentPage.innerHTML = page
        characters.results.forEach((character) => createCharacter(character))



    }
    displayList()
}

listApp()