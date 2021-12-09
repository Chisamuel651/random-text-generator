
let generalRandomQuote;
// console.log(romanceQuotes);
const generate = (type = null) => {
    console.log("the type is " + type);
    if(type == null){
        let value = Math.floor(Math.random() * 15);
        value = value%2;
        console.log(value);
        if(value== '1'){
            inspirationQuotes = motivationQuotes; 
        }
        else{
            inspirationQuotes = romanceQuotes;
        }
    }
    else{
        if(type == 'Motivation'){
            inspirationQuotes = motivationQuotes; 
        }
        else{
            inspirationQuotes = romanceQuotes;
        }
    }
    const randomQuotes1 = inspirationQuotes.beginningSentence[Math.floor(Math.random() * inspirationQuotes.beginningSentence.length)];
    const randomQuotes2 = inspirationQuotes.middleSentence[Math.floor(Math.random() * inspirationQuotes.middleSentence.length)];
    const randomQuotes3 = inspirationQuotes.endingSentence[Math.floor(Math.random() * inspirationQuotes.endingSentence.length)];
    generalRandomQuote = randomQuotes1 + " " + randomQuotes2 + " " + randomQuotes3;
    console.log(generalRandomQuote);
    return '<span>' + generalRandomQuote + '</span>';
}

generate();

let quoteBtn = document.getElementById('type');
// let quote1 = document.querySelector('.quote');
let quoteDrawer = document.getElementById('quote_drawer');
// let quoteDrawer2 = document.getElementById('quote_drawer');
let clickNum = document.querySelector('.number_generated');
let genNum = document.getElementById('number');
let clickQuote = document.querySelector('.quote_type');
let whichQuote = document.querySelector('.btn');
let generateBtn = document.getElementById('number_io');


let quoteGen = document.getElementsByClassName('quote_gen');
var quote_type = '';
quoteBtn.addEventListener('click', () => {
    let select_quote = document.getElementById('type');
    quote_type = select_quote.options[select_quote.selectedIndex].value;
    if (quote_type == 'Motivation') {
        console.log('Qoute type is ' + quote_type);
        // quoteDrawer.innerHTML = generate();
    }
    else{
        console.log('Qoute type is ' + quote_type);
    }
    clearInterval(myTime);
})

var quote_number = 0;
genNum.addEventListener('click', () => {
    let select_number = document.getElementById('number');
    // let quote_type = select_quote.options[select_quote.selectedIndex].value;
    quote_number = select_number.options[select_number.selectedIndex].value;
    console.log(quote_number);
    clearInterval(myTime);
})


    generateBtn.addEventListener('click', () =>{
        let htmlData = '';
        for(let i = 0; i < quote_number; i++){
            htmlData += generate(quote_type) + '<br><br>';
        }
        quoteDrawer.innerHTML = htmlData;
        if (quote_number >= 1) {
            clearInterval(myTime);
        }
    })



var myTime = window.setInterval('refresh()', 10000);
function refresh() {
    quoteDrawer.innerHTML = generate();
}

clickNum.addEventListener('click', () => {
    genNum.classList.toggle('new_quote_gen');
});
clickQuote.addEventListener('click', () => {
    whichQuote.classList.toggle('new_type_quote');
});
