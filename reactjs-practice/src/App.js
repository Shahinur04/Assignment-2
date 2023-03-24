import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <article className="blog">
        <h2>Article</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa
        excepturi rem dolores tenetur aliquid totam saepe, debitis ipsum optio
        architecto sit, quidem, velit aperiam minus vero eaque ut sed non
        molestias laborum! Ut, odio!
        <p style={{ backgroundColor: "aqua" }}>
          Life is all about for next step
        </p>
      </article>
      <Blog name="Mejaj"></Blog>
      <Blog name="Author"></Blog>
      <Blog author="Shahinur islam"></Blog>
      <Mobile power="100"></Mobile>
    </div>
  );
}
function Blog(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <author>Author:{props.author}</author>
    </div>
  );
}
function Mobile() {
  const [power, setPower] = useState(100);
  // console.log(setMobile);
  const batteryDown=()=>{
    // console.log(11)
if (power===0) {
  return
}
    const newPower=power-10;
    setPower(newPower);

  }
  return (
    <div style={{ textAlign: "center", justifyItems: "center" }}>
      <p>power:{power}</p>
      <button onClick={batteryDown} style={{ backgroundColor: "chartreuse" }}>Battery Down</button>
    </div>
  );
}

export default App;
