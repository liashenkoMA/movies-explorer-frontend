import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__conteiner" name='searchform' onSubmit={() => console.log('click')}>
        <div className="searchform__search">
          <label className="search">
            <input className="search__input" id="search-input" type="search" name="search" placeholder="Фильм" required></input>
          </label>
          <button type="button" className="searchform__btn"></button>
        </div>
        <div className="searchform__filtercheckbox">
          <FilterCheckbox />
        </div>
      </form>
    </div>
  );
}