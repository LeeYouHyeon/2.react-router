import { useState } from "react";

const Comp2 = () => {
  // count area
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count < 10) ? c => c + 1 : 10);
  }

  const decrease = () => {
    setCount((count > 0) ? c => c - 1 : 0);
  }
  //---------------------------------------

  // input area
  const [text, setText] = useState('');
  //---------------------------------------

  // color area
  const [color, setColor] = useState('black');
  //---------------------------------------
  return (
    <div className="comp comp2">
      <h2>Comp2.jsx area</h2>
      {/* count */}
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <hr />
      {/* input */}
      <input type="text" name="text" onChange={e => { setText(e.target.value); }} />
      <h3>input text : {text}</h3>
      <br />
      <hr />
      <br />

      <h2 style={{ color: 'white', backgroundColor: color }}>BackgroundColor Change Example</h2>
      <input type="color" onChange={e => { setColor(e.target.value); }} />
    </div>
  );
};

export default Comp2;