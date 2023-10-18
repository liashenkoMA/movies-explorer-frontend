import './Register.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';


export function Register(props) {

  return (
    <main>
      <section className="register">
        <div className="register__conteiner">
          <Logo rout={props.rout} />
          <h2 className="register__title">Добро пожаловать!</h2>
          <form className="register__form">
            <label className="register__form-field">
              <span className="register__input-placeholder">Имя</span>
              <input type='text' className="register__input register__input_type_name" id="register-input-name" name='name' required minLength='2' maxLength='30'></input>
              <span className="register__input-error input-name-error"></span>
            </label>
            <label className="register__form-field">
              <span className="register__input-placeholder">E-mail</span>
              <input type='email' className="register__input register__input_type_email" id="register-input-email" name='email' required></input>
              <span className="register__input-error input-email-error"></span>
            </label>
            <label className="register__form-field">
              <span className="register__input-placeholder">Пароль</span>
              <input type='password' className="register__input register__input_type_password" id="register-input-password" name='password' required></input>
              <span className="register__input-error input-password-error"></span>
            </label>
            <button type='submit' className="register__btn">Зарегистрироваться</button>
          </form>
          <span className="register__text">Уже зарегистрированы? <Link to={props.rout.login} className="register__signin-link">Войти</Link></span>
        </div>
      </section>
    </main>
  );
}