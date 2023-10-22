import './FilterCheckbox.css';

export function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" name="checkbox" className="checkbox__input"></input>
      <span className="checkbox__text">Короткометражки</span>
    </label>
  );
}