import './Login.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';


export function Login(props) {
  return (
    <main>
      <section className="login">
        <div className="login__conteiner">
          <Logo rout={props.rout} />
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form">
            <label className="login__form-field">
              <span className="login__input-placeholder">E-mail</span>
              <input type='email' className="login__input login__input_type_email" id="login-input-email" name='email' placeholder='email' required></input>
              <span className="login__input-error input-email-error"></span>
            </label>
            <label className="login__form-field">
              <span className="login__input-placeholder">Пароль</span>
              <input type='password' className="login__input login__input_type_password" id="login-input-password" name='password' placeholder='password' required minLength={2} maxLength={30}></input>
              <span className="login__input-error input-password-error"></span>
            </label>
            <button type='submit' className="login__btn">Войти</button>
          </form>
          <span className="login__text">Ещё не зарегистрированы? <Link to={props.rout.register} className="login__signin-link">Регистрация</Link></span>
        </div>
      </section>
    </main>
  );
}