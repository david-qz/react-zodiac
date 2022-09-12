import './ZodiacCard.css';

export default function ZodiacCard({ zodiacSign: { name, symbol, dates } }) {
  name = name[0].toUpperCase() + name.slice(1);

  return (
    <div className='ZodiacCard'>
      <img alt={name} src={`${process.env.PUBLIC_URL}/signs/${name}.png`}/>
      <span className='name'>{name}</span>
      <span className='symbol'>{symbol}</span>
      <span className='dates'>{dates}</span>
    </div>
  );
}
