import React, { useState } from "react";
import classnames from "classnames";

import CardFooter from "./CardFooter";

function Card({ card, toggleSelect }) {
  const [isHovered, cardHover] = useState(false);
  const CatCardWrapper = classnames({
    "cat-card-wrapper": true,
    "cat-card-wrapper--red": card.selected && !card.disabled,
    "cat-card-wrapper--blue": !card.selected && !card.disabled,
    "cat-card-wrapper--disabled": card.disabled,
  });

  const CatCardWeight = classnames({
    "cat-card__weight": true,
    "weight-circle": true,
    "weight-circle--red": card.selected && !card.disabled,
    "weight-circle--blue": !card.selected && !card.disabled,
    "weight-circle--disabled": card.disabled,
  });

  const CatCardUpper = classnames({
    "cat-card__upper": true,
    "cat-card__upper--red": card.selected && isHovered,
  });

  const onCardClick = () => {
    toggleSelect(card.id);
    cardHover(false);
  };

  return (
    <li className="cat-food__card">
      <div className={CatCardWrapper}>
        {card.disabled && <div className="cat-card--disabled"></div>}
        <div
          className="cat-card"
          onClick={onCardClick}
          onMouseLeave={() => (card.selected ? cardHover(false) : undefined)}
          onMouseEnter={() => (card.selected ? cardHover(true) : undefined)}
        >
          <span className={CatCardUpper}>
            {card.selected && isHovered
              ? "Котэ не одобряет?"
              : "Сказочное заморское яство"}
          </span>
          <h2 className="cat-card__heading">
            Нямушка
            <p className="cat-card__heading--small">{card.title}</p>
          </h2>
          <p className="cat-card__bonus">{card.quantity} порций</p>
          <p className="cat-card__bonus">{card.bonus}</p>
          <div className={CatCardWeight}>
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
        onCardClick={onCardClick}
      />
    </li>
  );
}

export default Card;
