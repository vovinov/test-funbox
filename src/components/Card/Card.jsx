import React from "react";

function Card({ card }) {
  return (
    <li className="cat-food__card">
      <div className="cat-card-wrapper">
        <div className="cat-card">
          <span className="cat-card__upper">Сказочное заморское яство</span>
          <h2 className="cat-card__heading">
            Нямушка
            <p className="cat-card__heading--small">{card.title}</p>
          </h2>
          <p className="cat-card__bonus">{card.quantity} порций</p>
          <p className="cat-card__bonus">{card.bonus}</p>
          <div className="cat-card__weight weight-circle">
            <p className="weight-circle__price">
              {card.weight}
              <span className="weight-circle__price--small">кг</span>
            </p>
          </div>
        </div>
      </div>
      <p className="cat-card__after">
        Чего сидишь? Порадуй котэ,&nbsp;
        <a className="cat-card__link" href="!#">
          <span className="cat-card__link--dashed">купи</span>.
        </a>
      </p>
    </li>
  );
}

export default Card;
