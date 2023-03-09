import "./styles.css";
import { useState } from "react";

export default function App() {
  let [data, setData] = useState("");
  function calculation() {
    try {
      let ans = eval(data);
      if (ans >= 0 || ans < 0) {
        setData(ans);
      }
    } catch (err) {
      setData("");
    }
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <input type="text" value={data} />
      <div>
        <button onClick={() => setData("")}>c</button>
        <button onClick={() => setData((a) => (a = a + "%"))}>%</button>
        <button onClick={() => setData((a) => a.substring(0, a.length - 1))}>
          del
        </button>
        <button onClick={() => setData((a) => (a = a + "/"))}>/</button>
      </div>
      <div>
        <button onClick={() => setData((a) => (a = a + "7"))}>7</button>
        <button onClick={() => setData((a) => (a = a + "8"))}>8</button>
        <button onClick={() => setData((a) => (a = a + "9"))}>9</button>
        <button onClick={() => setData((a) => (a = a + "*"))}>*</button>
      </div>
      <div>
        <button onClick={() => setData((a) => (a = a + "4"))}>4</button>
        <button onClick={() => setData((a) => (a = a + "5"))}>5</button>
        <button onClick={() => setData((a) => (a = a + "6"))}>6</button>
        <button onClick={() => setData((a) => (a = a + "-"))}>-</button>
      </div>
      <div>
        <button onClick={() => setData((a) => (a = a + "1"))}>1</button>
        <button onClick={() => setData((a) => (a = a + "2"))}>2</button>
        <button onClick={() => setData((a) => (a = a + "3"))}>3</button>
        <button onClick={() => setData((a) => (a = a + "+"))}>+</button>
      </div>
      <div>
        <button onClick={() => setData((a) => (a = a + "00"))}>00</button>
        <button onClick={() => setData((a) => (a = a + "0"))}>0</button>
        <button onClick={() => setData((a) => (a = a + "."))}>.</button>
        <button onClick={() => setData((a) => (a = a + "("))}>(</button>
      </div>
      <div>
        <button onClick={() => setData((a) => (a = a + ")"))}>)</button>
        <button className="mergecell" onClick={calculation}>
          =
        </button>
      </div>
    </div>
  );
}
