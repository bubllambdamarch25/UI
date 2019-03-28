class Cards{
 constructor(deck){
    this.deck = deck 
    this.deckCard = deck
 }
 
}


let cards = document.querySelectorAll('.card').forEach(card => new Cards(card))