import "../App/App.css";

function Main({ quote }) {
  return (
    <div className="main">
      <main>
        <p>Your new quote is: "{quote}"</p>
      </main>
    </div>
  );
}
export default Main;
