import React from 'react';
import './Register.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import useFormValidator from '../../hooks/UseFormValid';

export function Register(props) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { values, errors, formValid, handleChange } = useFormValidator();
  
  React.useEffect(() => {
    setName(values.name);
    setEmail(values.email);
    setPassword(values.password);
  }, [setName, setEmail, setPassword, values.name, values.email, values.password])

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister(name, email, password);
  }

  return (
    <main>
      <section className="register">
        <div className="register__conteiner">
          <Logo rout={props.rout} />
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" onSubmit={handleSubmit} noValidate>
            <label className="register__form-field">
              <span className="register__input-placeholder">Имя</span>
              <input type='text' onChange={handleChange} className="register__input register__input_type_name" id="register-input-name" name='name' placeholder='Имя' required minLength='2' maxLength='30'></input>
              <span className="register__input-error input-name-error">{errors.name}</span>
            </label>
            <label className="register__form-field">
              <span className="register__input-placeholder">E-mail</span>
              <input type='email' onChange={handleChange} className="register__input register__input_type_email" id="register-input-email" placeholder='email' name='email' pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,3}$" required></input>
              <span className="register__input-error input-email-error">{errors.email}</span>
            </label>
            <label className="register__form-field">
              <span className="register__input-placeholder">Пароль</span>
              <input type='password' onChange={handleChange} className="register__input register__input_type_password" id="register-input-password" name='password' placeholder='password' required minLength={2} maxLength={30}></input>
              <span className="register__input-error input-password-error">{errors.password}</span>
            </label>
            <span className="register__form-error">{props.errorMessage ? "При регистрации пользователя произошла ошибка." : ''}</span>
            <button type='submit' className="register__btn" disabled={!formValid}>Зарегистрироваться</button>
          </form>
          <span className="register__text">Уже зарегистрированы? <Link to={props.rout.login} className="register__signin-link">Войти</Link></span>
        </div>
      </section>
    </main>
  );
}
