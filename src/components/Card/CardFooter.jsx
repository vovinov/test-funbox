import React from "react";

export default function CardFooter({ id, selected, disabled }) {
  if (selected && id === 1) {
    return (
      <p className="cat-card__after">Печень утки разварная с артишоками.</p>
    );
  } else if (selected && id === 2) {
    return (
      <p className="cat-card__after">
        Головы щучьи с чесноком да свежайшая сёмгушка.
      </p>
    );
  } else if (selected && id === 3) {
    return (
      <p className="cat-card__after">Филе из цыплят с трюфелями в бульоне.</p>
    );
  }

  if (disabled) {
    return (
      <p className="cat-card__after cat-card__after--disabled">
        Печалька, с фуа-гра закончился.
      </p>
    );
  }
  return (
    <p className="cat-card__after">
      Чего сидишь? Порадуй котэ,&nbsp;
      <a className="cat-card__link" href="!#">
        <span className="cat-card__link--dashed">купи</span>.
      </a>
    </p>
  );
}
