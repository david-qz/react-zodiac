import './Main.css';
import '../ZodiacCard/ZodiacCard';
import { zodiacSigns } from '../../data';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function App() {
  return (
    <div className='Main'>
      {zodiacSigns.map(sign => <ZodiacCard key={sign.id} zodiacSign={sign} />)}
    </div>
  );
}
