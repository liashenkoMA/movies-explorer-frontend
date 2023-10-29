import React from 'react';
import './FilterCheckbox.css';

export function FilterCheckbox({ onChange, checked }) {

  return (
    <label className="checkbox">
      <input type="checkbox" name="checkbox" className="checkbox__input" onChange={onChange} checked={checked ? true : false} ></input>
      <span className="checkbox__text">Короткометражки</span>
    </label>
  );
}
