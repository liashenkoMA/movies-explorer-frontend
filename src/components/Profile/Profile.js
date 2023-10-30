import React, { useContext } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidator from '../../hooks/UseFormValid';

export function Profile(props) {

  const user = useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState(true);
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const { values, errors, formValid, handleChange } = useFormValidator();

  React.useEffect(() => {
    setEmail(values.email);
    setName(values.name);
    if (user.name !== name && user.email !== email) {
      setBtnDisabled(!formValid);
    } else {
      setBtnDisabled(true);
    }
  }, [setEmail, setBtnDisabled, setName, values.email, values.name, user.name, user.email, name, email, formValid])

  function handleClick() {
    setState(!state);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.patchUser(name, email)
    setState(!state);
  }

  return (
    <main>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <label className="profile__form-field">
            <input className="profile__input profile__input_type_name" onChange={handleChange} id="profile-input-name" type="text" name='name' placeholder="Имя" required minLength='2' maxLength='30' disabled={state}></input>
            <span className="profile__value profile__value_type_name">{state === true ? user.name : ''}</span>
            <span className="profile__input-error input-name-error">{errors.name}</span>
          </label>
          <label className="profile__form-field">
            <input className="profile__input profile__input_type_email" onChange={handleChange} id="profile-input-email" type="email" name='email' placeholder="E-mail" required disabled={state} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,3}$"></input>
            <span className="profile__value profile__value_type_email">{state === true ? user.email : ''}</span>
            <span className="profile__input-error">{errors.email}</span>
          </label>
          {state
            ? (
              <>
                <span className="profile__text-isloading">{props.saveProfile ? "Профиль обновлен" : ''}</span>
                <button type="button" className="profile__link-btn profile__link-btn_type_edit" onClick={handleClick}>Редактировать</button>
                <Link to={props.rout.main} className="profile__link-btn profile__link-btn_type_exit" onClick={props.signOutUser}>Выйти из аккаунта</Link>
              </>
            ) : (
              <>
                <span className="profile__error">{props.errorMessage ? "При обновлении профиля произошла ошибка." : ''}</span>
                <button className="profile__button" type='submit' disabled={btnDisabled}>Сохранить</button>
              </>
            )}
        </form>
      </section >
    </main>
  );
}
