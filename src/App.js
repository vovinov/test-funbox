import React from "react";
import CardListContainer from "./components/Card/CardListContainer";

function App() {
  return (
    <div className="wrapper">
      <section className="cat-food">
        <div className="_container">
          <h1 className="cat-food__title">Ты сегодня кормил кота?</h1>
          <CardListContainer />
        </div>
      </section>
    </div>
  );
}

export default App;
