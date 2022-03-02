import "../App/App.css";

function Button({ click }) {
  return (
    <div className="button">
      <button onClick={click}>New Quote</button>
    </div>
  );
}

export default Button;
