class Cards{
 constructor(deck){
    this.deck = deck;
    this.showCard = deck.querySelector(".cardChoice");
    console.log(this.showCard)
    this.showCard.addEventListener('click', this.play.bind(this));
 }
play(){
    this.deck.classList.toggle('coraline');
 }
}


let cards = document.querySelectorAll('.card').forEach(card => new Cards(card))