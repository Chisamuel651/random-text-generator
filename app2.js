const romanceQuotes = {
    beginSent: [
        'I fell in love with her courage, her sincerity, and her flaming self respect.',
        'Thinking of you keeps me awake.',
        'Love never dies a natural death. It dies because we don’t know how to replenish its source.',
        'Love is an untamed force. When we try to control it, it destroys us.',
        'You know you’re in love when you',
        'The greatest degree of inner tranquility comes from the development of love and compassion.',
        'You’ve gotta dance like there’s nobody watching,',
        'A new command I give you: Love one another.',
        'There is always some madness in love.',
        'A kiss is a lovely trick designed'
    ],
    midleSent: [
        'And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be.',
        'Dreaming of you keeps me asleep.',
        'It dies of blindness and errors and betrayals.',
        ' When we try to imprison it, it enslaves us.',
        'can’t fall asleep because reality is',
        'The more we care for the happiness of others,',
        'Love like you’ll never be hurt, Sing like there’s nobody listening,',
        'As I have loved you,',
        'But there is also always',
        'by nature to stop speech when'
    ],
    endSent: [
        ' I love her and it is the beginning of everything.',
        'Being with you keeps me alive.',
        'It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings',
        'When we try to understand it, it leaves us feeling lost and confused.',
        'finally better than your dreams.',
        'the greater is our own sense of well-being.',
        ' And live like it’s heaven on earth.',
        'so you must love one another.',
        'some reason in madness.',
        ' words become superfluous.'
    ]
}

// let generalRandomQuote;

const generate2 = () => {
    const randomQuotes11 = romanceQuotes.beginSent[Math.floor(Math.random() * romanceQuotes.beginSent.length)];
    const randomQuotes12 = romanceQuotes.midleSent[Math.floor(Math.random() * romanceQuotes.midleSent.length)];
    const randomQuotes13 = romanceQuotes.endSent[Math.floor(Math.random() * romanceQuotes.endSent.length)];
    generalRandomQuotes = randomQuotes11 + " " + randomQuotes12 + " " + randomQuotes13;
    console.log(generalRandomQuotes);
    return '<span>'+ generalRandomQuotes + '</span>';
}

generate2();

let quoteBtn2 = document.getElementById('quote-botton2');
// let quoteDrawer = document.getElementById('quote_drawer');
// let quoteGen2 = document.getElementsByClassName('quote_gen');

quoteBtn2.addEventListener('click', () => {
    let select_quote = document.getElementById('type');
    let quote_type = select_quote.options[select_quote.selectedIndex].value;
    if (quote_type == 'Romance') {
        console.log('Qoute type is ' + quote_type);
        // quoteDrawer.innerHTML = generate2();
    }
    clearInterval(myTime);
})

for (let i = 0; i < quoteGen.length; i++) {

    quoteGen[i].addEventListener('click', () => {
        let select_quote = document.getElementById('type');
        let quote_type = select_quote.options[select_quote.selectedIndex].value;
        var htmlData = '';
        let num = i + 1;
        for (let j = 0; j < num; j++) {
                if (num == 1 && quote_type == 'Romance') {
                    htmlData = generate2();
                }
                if (num > 1 && quote_type == 'Romance') {
                    htmlData += generate2() + '<br><br>';
                }
            // 
            // console.log(htmlData);
        }
        quoteDrawer.innerHTML = htmlData;
        htmlData = '';

        if (num >= 1) {
            clearInterval(myTime);
        }
    })
}



