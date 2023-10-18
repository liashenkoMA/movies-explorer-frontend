import './Promo.css';
import Promoicon from '../../images/Promoicon.svg'

export function Promo() {
  return (
    <section className="promo">
      <img src={Promoicon} className='promo__icon' alt='Лого Яндекс Практикум'></img>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  )
}