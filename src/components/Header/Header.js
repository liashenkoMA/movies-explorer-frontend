import './Header.css';
import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation'

export function Header(props) {

  const location = useLocation();

  return (
    <header className={`header ${location.pathname === props.rout.main ? 'header__page-main' : ''}`}>
      <section className="header__content">
        <Logo rout={props.rout} />
        <Navigation rout={props.rout} />
      </section>
    </header>
  );
}
