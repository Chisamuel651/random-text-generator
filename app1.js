const inspirationQuotes = {
    beginningSentence: [
        "If you look at what you have in life, you'll always have more.",
        "Your time is limited, so don't waste it living someone else's life.",
        "Life is what happens",
        "If you set your goals ridiculously high and it's a failure,",
        "The best and most beautiful things in the world",
        "The greatest glory in living",
        "Many of life's failures are people",
        "You have brains in your head.",
        "May you live",
        "Love the life"
    ],
    middleSentence: [
        "If you look at what you don't have in life,",
        "Don't be trapped by dogma –",
        "when you're busy",
        "you will fail above",
        "cannot be seen or even touched —",
        "lies not in never falling,",
        "who did not realize how close",
        "You have feet in your shoes.",
        "all the days",
        "you live."
    ],
    endingSentence: [
        "you'll never have enough.",
        "which is living with the results of other people's thinking.",
        "making other plans.",
        "everyone else's success.",
        "they must be felt with the heart.",
        "but in rising every time we fall.",
        "they were to success when they gave up.",
        "You can steer yourself any direction you choose.",
        "your life.",
        "Live the life you love."
    ]
}

let generalRandomQuote;

const generate = () => {
    const randomQuotes1 = inspirationQuotes.beginningSentence[Math.floor(Math.random() * inspirationQuotes.beginningSentence.length)];
    const randomQuotes2 = inspirationQuotes.middleSentence[Math.floor(Math.random() * inspirationQuotes.middleSentence.length)];
    const randomQuotes3 = inspirationQuotes.endingSentence[Math.floor(Math.random() * inspirationQuotes.endingSentence.length)];
    generalRandomQuote = randomQuotes1 + " " + randomQuotes2 + " " + randomQuotes3;
    console.log(generalRandomQuote);
    return '<span>' + generalRandomQuote + '</span>';
}

generate();

let quoteBtn = document.getElementById('quote-button');
// let quote1 = document.querySelector('.quote');
let quoteDrawer = document.getElementById('quote_drawer');
let quoteDrawer2 = document.getElementById('quote_drawer2');
let clickNum = document.querySelector('.number_generated');
let genNum = document.querySelector('.number');
let clickQuote = document.querySelector('.quote_type');
let whichQuote = document.querySelector('.btn');


let quoteGen = document.getElementsByClassName('quote_gen');

quoteBtn.addEventListener('click', () => {
    let select_quote = document.getElementById('type');
    let quote_type = select_quote.options[select_quote.selectedIndex].value;
    if (quote_type == 'Motivation') {
        console.log('Qoute type is ' + quote_type);
        // quoteDrawer.innerHTML = generate();
    }
    clearInterval(myTime);
})

for (let k = 0; k < quoteGen.length; k++) {

    quoteGen[k].addEventListener('click', () => {
        let select_quote = document.getElementById('type');
        let quote_type = select_quote.options[select_quote.selectedIndex].value;
        var htmlData = '';
        let num = k + 1;
        for (let j = 0; j < num; j++) {
            if (num == 1 && quote_type == 'Motivation') {
                htmlData = generate();
            }
            if (num > 1 && quote_type == 'Motivation') {
                htmlData += generate() + '<br><br>';
            }
            // 
            // console.log(htmlData);
        }
        quoteDrawer2.innerHTML = htmlData;
        htmlData = '';

        if (num >= 1) {
            clearInterval(myTime);
        }
    })
}


var myTime = window.setInterval('refresh()', 10000);
function refresh() {
    quoteDrawer2.innerHTML = generate();
}

clickNum.addEventListener('click', () => {
    genNum.classList.toggle('new_quote_gen');
});
clickQuote.addEventListener('click', () => {
    whichQuote.classList.toggle('new_type_quote');
});
