import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Display">0234324</div>
        <div className="Output">2348923</div>

        <div className="Buttons">
          <button className="Btn Gray">AC</button>
          <button className="Btn Gray">+/-</button>
          <button className="Btn Gray">÷</button>

          <button className="Btn Backspace Orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="Btn">7</button>
          <button className="Btn">8</button>
          <button className="Btn">9</button>
          <button className="Btn Orange">+</button>
          <button className="Btn">4</button>
          <button className="Btn">5</button>
          <button className="Btn">6</button>
          <button className="Btn Orange">-</button>
          <button className="Btn">1</button>
          <button className="Btn">2</button>
          <button className="Btn">3</button>
          <button className="Btn Orange">×</button>

          <button className="Btn Zero">0</button>
          <button className="Btn">.</button>
          <button className="Btn Orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
