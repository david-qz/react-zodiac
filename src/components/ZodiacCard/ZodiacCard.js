import './ZodiacCard.css';

export default function ZodiacCard({ zodiacSign }) {
  return <p>{zodiacSign.name}</p>;
}
