import './ZodiacCard.css';
import background from '../../images/parchment.jpg';

export default function ZodiacCard({ zodiacSign: { name, symbol, dates } }) {
  name = name[0].toUpperCase() + name.slice(1);

  return (
    <div
      className='ZodiacCard'
      style={{ backgroundImage: `url(${background})` }}
    >
      <span className='name'>{name}</span>
      <span className='symbol'>The {symbol}</span>
      <img alt={name} src={`${process.env.PUBLIC_URL}/signs/${name}.png`}/>
      <span className='dates'>{dates}</span>
    </div>
  );
}
