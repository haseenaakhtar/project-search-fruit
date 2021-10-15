import React, { useState } from "react";

const App = () => {
  const [fruit, setFruit] = useState();
  const [image, setImage] = useState([]);
  const array = ["apple", "banana", "charry"];
  console.log("fruite", fruit);
  const fruitefun = () => {

    array.filter((item) => {
      if (item === fruit) {
        debugger;
        setImage((prev) => [item, ...prev]);
      }
    })
  }

  return (
    <div className="App">
      <h1>There are the fruits .type the fruit name</h1>
      <ul>
        <li>apple</li>
        <li>banana</li>
        <li>charry</li>
      </ul>
     Enter Fruit Name: <input value={fruit} type="text" onChange={(e) => { setFruit(e.target.value) }} />
      <button onClick={() => fruitefun()}>search</button>
      {image ?
        image.map((item) => <img src={`${item}.jpg`} />)
        : ""
      }
    </div>
  );
}

export default App;
