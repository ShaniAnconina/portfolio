'use strict'

var gPortfolios = [
    { id: 'minesweeper', name: 'Minesweeper', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/minesweeper/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'book-shop', name: 'Book Shop', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/book-shop/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'safe-content', name: 'Safe Content', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/safe-content/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'ball-board', name: 'Ball Board', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/ball-board/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'touch-nums', name: 'Touch Nums', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/touch-nums/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'pacman', name: 'Pacman', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/pacman/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'todos', name: 'Todos', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/todos/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'in-picture', name: 'In Picture', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/in-picture/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
    { id: 'balloon-pop', name: 'Balloon Pop', title: 'Better push those boxes', desc: 'lorem ipsum lorem ipsum lorem ipsum', url: 'https://shanianconina.github.io/balloon-pop/', publishedAt: getPublishedDate(), labels: ['Matrixes', 'keyboard events'], },
]

function getPortfolios() {
    return gPortfolios
}

function getPortfolioById(portfolioId) {
    return gPortfolios.find(portfolio => portfolioId === portfolio.id)
}

function getPublishedDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const str = `${month} ${year}`
    return str
}

function submit(subject, body) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shanianconina310@gmail.com.com&su=${subject}&body=${body}`)
}