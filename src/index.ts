type Deck = NormalCard[];

type Color = "♥️" | "♦️" | "♣️" | "♠️"

type NormalCard = {
    color: Color;
    mark: number
}

function createDeck(): Deck {
    let cardList: Deck = [];
    for(let i = 1; i <= 13; i++) {
        cardList.push({
            mark: i,
            color: '♠️'
        })
        cardList.push({
            mark: i,
            color: "♣️"
        })
        cardList.push({
            mark: i,
            color: "♥️"
        })
        cardList.push({
            mark: i,
            color: "♦️"
        })
    }
    return cardList; 
}

function printDeck(deck: Deck) {
    deck.forEach(item => {
        let str = item.color;
        if (item.mark === 11) {
            str += 'J';
        }
        else if (item.mark === 12) {
            str += 'Q';
        } else if(item.mark === 13) {
            str += 'K';
        } else {
            str += item.mark;
        }
        console.log(str);
    })
}

printDeck(createDeck());