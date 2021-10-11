// 扑克牌小栗子改造
type Deck = NormalCard[];

// type Color = "♥️" | "♦️" | "♣️" | "♠️"
enum Color {
    heart = "♥️",
    square = "♦️",
    plum = "♣️",
    Spades = "♠️"
}

enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = '9',
    then = "10",
    jack = "J",
    queen = "Q",
    king = "K"
}

type NormalCard = {
    color: Color;
    mark: Mark
}

function createDeck(): Deck {
    let cardList: Deck = [];
    // for(let i = 1; i <= 13; i++) {
    //     cardList.push({
    //         mark: i,
    //         color: Color.Spades
    //     })
    //     cardList.push({
    //         mark: i,
    //         color: Color.heart
    //     })
    //     cardList.push({
    //         mark: i,
    //         color: Color.plum
    //     })
    //     cardList.push({
    //         mark: i,
    //         color: Color.square
    //     })
    // }
    const mark = Object.values(Mark);
    const color = Object.values(Color);
    for (const m of mark) {
        for (const c of color) {
            cardList.push({
                color: c,
                mark: m
            })
        }
    }
    // mark.forEach((m) => {
    //     color.forEach(c => {
    //         cardList.push({
    //             color: c,
    //             mark: m
    //         })
    //     })
    // })
    return cardList; 
}

// createDeck()

function printDeck(deck: Deck) {
    deck.forEach(item => {
        // let str = item.color;
        // if (item.mark === 11) {
        //     str += 'J';
        // }
        // else if (item.mark === 12) {
        //     str += 'Q';
        // } else if(item.mark === 13) {
        //     str += 'K';
        // } else {
        //     str += item.mark;
        // }
        // console.log(str);
        console.log(item.color + item.mark);
    })
}

printDeck(createDeck());
