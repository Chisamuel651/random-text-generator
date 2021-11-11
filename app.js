const quotes = [
    {
        quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. `,
        author: `-Oprah Winfrey`
    },

    {
        quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
        author: `-Steve Jobs`
    },

    {
        quote: `Life is what happens when you're busy making other plans.`,
        author: `-John Lennon`
    },

    {
        quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        author: `-James Cameron `
    },

    {
        quote: `The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.`,
        author: `-Hellen Kellher`
    },

    {
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        author: `-Nelson Mandela`
    },

    {
        quote: `Many of life's failures are people who did not realize how close they were to success when they gave up.`,
        author: `-Thomas A. Edison`
    },

    {
        quote: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.`,
        author: `-Dr. Seuss`
    },

    {
        quote: `May you live all the days of your life.`,
        author: `-Jonathan Swift`
    },

    {
        quote: `Love the life you live. Live the life you love.`,
        author: `-Bob Marley`
    }
]

const quoteBtn = document.getElementById('quote-button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () =>{
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})