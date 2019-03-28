class Cards{
 constructor(deck){
    this.deck = deck;
    this.showCard = document.querySelector(".cardChoice");
    this.showCard.addEventListener('click', this.display.bind(this));
 }
 display(){
    this.deck.classList.toggle('show');
 }
}


let cards = document.querySelectorAll('.card').forEach(card => new Cards(card))