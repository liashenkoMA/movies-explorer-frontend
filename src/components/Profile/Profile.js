import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

export function Profile(props) {

  const [state, setState] = React.useState(true)
  const person = {
    name: 'Максим',
    email: 'maksim_an@mail.ru',
  }

  function handleClick() {
    setState(!state);
  }

  function handleSubmit() {
    setState(!state);
  }

  return (
    <main>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${person.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__form-field">
            <input className="profile__input profile__input_type_name" id="profile-input-name" type="text" name='name' placeholder="Имя" required minLength='2' maxLength='30' disabled={state}></input>
            <span className="profile__value profile__value_type_name">{person.name}</span>
            <span className="profile__input-error input-name-error"></span>
          </label>
          <label className="profile__form-field">
            <input className="profile__input profile__input_type_email" id="profile-input-email" type="email" name='email' placeholder="E-mail" required disabled={state}></input>
            <span className="profile__value profile__value_type_email">{person.email}</span>
            <span className="profile__input-error input-email-error"></span>
          </label>
          {state
            ? (
              <>
                <button type="button" className="profile__link-btn profile__link-btn_type_edit" onClick={handleClick}>Редактировать</button>
                <Link to={props.rout.main} className="profile__link-btn profile__link-btn_type_exit">Выйти из аккаунта</Link>
              </>
            ) : (
              <>
                <span className="profile__error"></span>
                <button className="profile__button" type='submit'>Сохранить</button>
              </>
            )}
        </form>
      </section >
    </main>
  );
}