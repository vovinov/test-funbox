import React from "react";

function Card() {
  return (
    <div className="cat-food__card">
      <div className="cat-card-wrapper">
        <div className="cat-card">
          <span className="cat-card__upper">Сказочное заморское яство</span>
          <h2 className="cat-card__heading">
            Нямушка
            <p className="cat-card__heading--small">с фуа-гра</p>
          </h2>
          <p className="cat-card__bonus">10 порций</p>
          <p className="cat-card__bonus">мышь в подарок</p>
        </div>
      </div>
      <p className="cat-card__after">
        Чего сидишь? Порадуй котэ,&nbsp;
        <a className="cat-card__link" href="!#">
          <span className="cat-card__link--dashed">купи</span>.
        </a>
      </p>
    </div>
  );
}

export default Card;
