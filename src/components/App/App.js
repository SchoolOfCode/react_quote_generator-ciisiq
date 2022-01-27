import "./App.css";
import Main from "../Main/main";
import Header from "../Header/header";
import Button from "../Button/button";
import QuoteHeading from "../QuoteHeading/quoteHeading";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState("Hello");

  async function handleClick(newQuote) {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    newQuote = data;
    console.log(newQuote);
    setQuotes(newQuote);
  }

  return (
    <div className="App">
      <Header />
      <Main quote={quotes.quote} />
      <Button click={() => handleClick()} />
      <QuoteHeading />
    </div>
  );
}

export default App;

// I need to pass the queotes from fetch resquest
// inside my H1 on main page
