// card parceiros flip

const cardSmt = document.getElementById('card-smt-id')
const cardCanon = document.getElementById('card-canon-id')
const cardConvatec = document.getElementById('card-convatec-id')
const cardBiotronic = document.getElementById('card-biotronic-id')

cardSmt.addEventListener('click', (e) =>{
    cardSmt.classList.toggle('flip')
})
cardCanon.addEventListener('click', (e) =>{
    cardCanon.classList.toggle('flip')
})
cardBiotronic.addEventListener('click', (e) =>{
    cardBiotronic.classList.toggle('flip')
})
cardConvatec.addEventListener('click', (e) =>{
    cardConvatec.classList.toggle('flip')
})