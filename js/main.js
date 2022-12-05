'use strict'


$(initPage)

function initPage() {
    renderPortfolios()
}

function renderPortfolios() {
    const portfolios = getPortfolios()
    var strHTML = portfolios.map(portfolio => `
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onOpenModal('${portfolio.id}')">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${portfolio.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${portfolio.name}</h4>
        <p>${portfolio.title}</p>
        </div>
    </div>      
    `)
    document.querySelector('.grid-row').innerHTML = (strHTML.join(''))
}


function onOpenModal(portfolioId) {
    var portfolio = getPortfolioById(portfolioId)
    var strHTML = `
    <h2>${portfolio.name}</h2>
    <p class="item-intro">${portfolio.title}</p>
    <img class="img-fluid d-block mx-auto portfolio-img" src="img/portfolio/${portfolio.id}.png" alt="">
    <p>${portfolio.desc}</p>
    <ul class="list-inline">
    <li>Date: ${portfolio.publishedAt}</li>
    <li>Labels: ${portfolio.labels}</li>
    </ul>
    <a href="${portfolio.url}">
    <button class="btn btn-project">Check this project</button> </a>
    <button class="btn btn-primary" data-dismiss="modal" type="button">Close Project</button>
    `
    document.querySelector('.modal-body').innerHTML = strHTML
}

function onSubmit(ev) {
    ev.preventDefault()
    const subject = document.querySelector('.email-item').value
    const body = document.querySelector('.subject-item').value
    submit(subject, body)
}