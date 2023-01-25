var expect = chai.expect;



describe("createDeck", function() {
    it("Should create a deck of 52 cards", function() {
        let myDeck = new Deck();
        myDeck.createDeck();
        //console.log(myDeck.deck);
        expect(myDeck.deck.length).to.equal(52);
    });
});



describe("testShuffle", function() {
    it("Should shuffle deck randomly", function() {
        let myDeck = new Deck();
        let mySecondDeck = new Deck();

        myDeck.createDeck();
        myDeck.shuffleDeck();

        mySecondDeck.createDeck();
        mySecondDeck.shuffleDeck();

        expect(myDeck.deck).to.not.equal(mySecondDeck.deck); //not sure if this is how I'd go about it, just not sure how else I would check
     });
});