import React from "react";

import CardFooter from "./CardFooter";

function Card({ card, toggleSelect }) {
  return (
    <li className="cat-food__card">
      <div
        className={`cat-card-wrapper cat-card-wrapper--${
          card.selected ? "red" : "blue"
        }`}
      >
        <div
          className={`cat-card ${card.disabled && "cat-card--disabled"}`}
          onClick={() => {
            toggleSelect(card.id);
          }}
        >
          <span className="cat-card__upper">Сказочное заморское яство</span>
          <h2 className="cat-card__heading">
            Нямушка
            <p className="cat-card__heading--small">{card.title}</p>
          </h2>
          <p className="cat-card__bonus">{card.quantity} порций</p>
          <p className="cat-card__bonus">{card.bonus}</p>
          <div
            className={
              card.selected
                ? "cat-card__weight weight-circle weight-circle--red"
                : "cat-card__weight weight-circle weight-circle--blue"
            }
          >
            <p className="weight-circle__price">
              {card.weight}
              <span className="weight-circle__price--small">кг</span>
            </p>
          </div>
        </div>
      </div>
      <CardFooter
        id={card.id}
        selected={card.selected}
        disabled={card.disabled}
      />
    </li>
  );
}

export default Card;
