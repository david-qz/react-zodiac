import './ZodiacCard.css';
import background from '../../images/parchment.jpg';
import { useState } from 'react';

const ROTATION_SPREAD = 2;
const TRANSLATION_SPREAD = 20;

function randomTransformation() {
  const rotation = (Math.random() - 0.5) * ROTATION_SPREAD;
  const offsetX = (Math.random() - 0.5) * TRANSLATION_SPREAD;
  const offsetY = (Math.random() - 0.5) * TRANSLATION_SPREAD;

  return `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`;
}

export default function ZodiacCard({ zodiacSign: { name, symbol, dates } }) {
  const [transformation] = useState(randomTransformation);

  name = name[0].toUpperCase() + name.slice(1);
  return (
    <div
      className='ZodiacCard'
      style={{
        backgroundImage: `url(${background})`,
        transform: transformation,
        zIndex: -1
      }}
    >
      <span className='name'>{name}</span>
      <span className='symbol'>The {symbol}</span>
      <img alt={name} src={`${process.env.PUBLIC_URL}/signs/${name}.png`}/>
      <span className='dates'>{dates}</span>
    </div>
  );
}
