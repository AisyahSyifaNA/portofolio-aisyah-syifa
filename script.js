window.addEventListener('DOMContentLoaded', () => {
  setupQuotes();
  setupMarquee(); // marquee kamu
  initScrollEffect(); // scroll effect kamu
});

function setupQuotes() {
  const quotes = [
    { quotes: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { quotes: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { quotes: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
    { quotes: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" }
  ];

  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const newQuoteBtn = document.getElementById('new-quote');

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.quotes}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
  }

  newQuoteBtn.addEventListener('click', displayRandomQuote);

  // Show one when page loads
  displayRandomQuote();
}


// TEKS JALAN 
const container = document.getElementById('marquee-container');

const topText = document.createElement('h1');
topText.innerHTML = `
  <marquee direction="left" scrollamount="6" style="color: #E9DEFF; font-size: 52px; margin-top: -64px; ">
    LET ME INTRODUCE MY SELF | LET ME INTRODUCE MY SELF | LET ME INTRODUCE MY SELF
  </marquee>
`;

const bottomText = document.createElement('h1');
bottomText.innerHTML = `
  <marquee direction="right" scrollamount="6" style="color: #E9DEFF; font-size: 52px; margin-top: -64px;">
    LET ME INTRODUCE MY SELF | LET ME INTRODUCE MY SELF | LET ME INTRODUCE MY SELF
  </marquee>
`;

container.append(topText, bottomText);


// CONNECT KE EMAIL
document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const fullSubject = `${subject} (from ${name})`;
  const body = `Name: ${name}\n\nMessage:\n${message}`;

  const mailtoLink = `mailto:aisyah.syifaa.na@gmail.com?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
