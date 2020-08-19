import React from "react";
import Card from "./Card";

export default function CardList({ cards }) {
  return (
    <ul className="cat-food__cards">
      {cards.map((card) => {
        return <Card key={card.title} card={card} />;
      })}
    </ul>
  );
}
