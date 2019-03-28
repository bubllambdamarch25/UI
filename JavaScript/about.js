class Abcard{
    constructor(ace){
        this.ace = ace;
        this.knowledge= this.ace.dataset.card;
        //console.log(this.knowledge);
        this.deckCase = document.querySelector(`.ab-card[data-card="${this.knowledge}"]`);
        //console.log(this.deckCase);
        this.replaceDeck = new Deck(this.deckCase);
        //console.log(this.replaceDeck);
        this.ace.addEventListener("click", () =>{this.select()});
    }
    select() {
        const clubs = document.querySelectorAll(".cars");
        clubs.forEach(card => {card.classList.remove("car-driven")});
        this.ace.classList.add("car-driven")
        this.replaceDeck.select();
    }
}
class Deck{
    constructor(cards){
        this.cards = cards;
    }
    select(){
        const spades = document.querySelectorAll(".ab-card");
        spades.forEach(ace => {ace.classList.remove("card-chosen");});
     this.cards.classList.add("card-chosen")
    }
   
}
let deckOfDiamonds = document.querySelectorAll(".cars").forEach(card => new Abcard(card))