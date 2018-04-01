
document.addEventListener("DOMContentLoaded", function () {
    var gameContainer = document.querySelector(".game-container");
    var arrayOfCategories =  ["blue", "green", "pink", "purple", "purplelight"];
    var shuffledArray;
    var coveredCards;

    // Multiplying elements in array in order to get pair of cards

    function createArrayOfCardsPair(array) {
        var gameArrayOfPairsOfCard = [];

        for (var i = 0; i < 2; i++) {
            for (var category in array) {
                gameArrayOfPairsOfCard.push(array[category]);
            }
        }
        return gameArrayOfPairsOfCard;
    }
    
    // Reaordering array elements

    function shuffle(array) {
        var arrayOfCardsInRandomOrder = array.sort(function (a, b) {
            return 0.5 - Math.random();
        });

        return arrayOfCardsInRandomOrder;
    }


});