import React from "react";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="wrapper">
      <section className="cat-food">
        <div className="_container">
          <h1 className="cat-food__title">Ты сегодня кормил кота?</h1>
          <div className="cat-food__cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
