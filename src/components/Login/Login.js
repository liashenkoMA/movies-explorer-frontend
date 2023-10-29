import React from 'react';
import './Login.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import useFormValidator from '../../hooks/UseFormValid';


export function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { values, errors, formValid, handleChange } = useFormValidator();

  React.useEffect(() => {
    setEmail(values.email);
    setPassword(values.password);
  }, [setEmail, setPassword, values.email, values.password])

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin(email, password);
  }

  return (
    <main>
      <section className="login">
        <div className="login__conteiner">
          <Logo rout={props.rout} />
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form" onSubmit={handleSubmit} noValidate>
            <label className="login__form-field">
              <span className="login__input-placeholder">E-mail</span>
              <input type='email' onChange={handleChange} className="login__input login__input_type_email" id="login-input-email" name='email' placeholder='email' required></input>
              <span className="login__input-error input-email-error">{errors.email}</span>
            </label>
            <label className="login__form-field">
              <span className="login__input-placeholder">Пароль</span>
              <input type='password' onChange={handleChange} className="login__input login__input_type_password" id="login-input-password" name='password' placeholder='password' required minLength={2} maxLength={30}></input>
              <span className="login__input-error input-password-error">{errors.password}</span>
            </label>
            <span className="login__form-error">{props.errorMessage ? "Вы ввели неправильный логин или пароль." : ''}</span>
            <button type='submit' className="login__btn" disabled={!formValid}>Войти</button>
          </form>
          <span className="login__text">Ещё не зарегистрированы? <Link to={props.rout.register} className="login__signin-link">Регистрация</Link></span>
        </div>
      </section>
    </main>
  );
}