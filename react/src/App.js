import './App.css';

function App() {
const quote = require('inspirational-quotes');
let postQuote = quote.getRandomQuote()
console.log(quote.getRandomQuote())

  return (
    <div>
      <h2>Inspirerende uitspraken</h2>
      <p>druk op de knop voor een nieuwe inspirerende uitspraak.</p>
      <p><strong>{postQuote}</strong></p><br></br>
      <button id='quotebtn' onClick={refreshPage}>Nieuwe quote</button>

    </div>
  );
}

function refreshPage(){
    window.location.reload();
}

export default App;
