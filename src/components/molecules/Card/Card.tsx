import Image from 'next/image';
import React from 'react';

import { style } from './Card.style';

interface ICardProps {
  title?: string;
  text?: string;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  cta?: React.ReactNode;
}

function Card(props: ICardProps) {
  const {
    title,
    text,
    imgSrc = 'https://picsum.photos/960/480',
    imgAlt = 'Card image',
    cta,
  } = props;

  return (
    <div className={`${style.card}`}>
      {imgSrc.length > 0 ? (
        <div className={`${style.cardImageWrapper}`}>
          <Image
            className={`${style.cardImage}`}
            src={imgSrc}
            fill
            alt={imgAlt}
          />
        </div>
      ) : null}
      <div className={`${style.cardBody}`}>
        {title ? <div className={`${style.cardTitle}`}>{title}</div> : null}
        {text ? <div className={`${style.cardText}`}>{text}</div> : null}
        {cta ? <a className={`${style.cardCta}`}>{cta}</a> : null}
      </div>
    </div>
  );
}

export default Card;
