import { Link } from 'react-router-dom';
import './Logo.css';
import Logoproject from '../../images/Logoproject.svg';

export function Logo(props) {
  return (
    <Link to={props.rout.main} className="logo">
      <img src={Logoproject} className="logo__image" alt="Логотип сайта" />
    </Link>
  );
}