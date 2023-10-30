import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export function SearchForm({ rout, onSubmit, onSearch }) {

  const [search, setSearch] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === rout.movies) {
      setSearch(localStorage.getItem('input'));
      setCheck(JSON.parse(localStorage.getItem('checkbox')));
    }
  }, []);

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  };

  function handleFilter(e) {
    setCheck(e.target.checked);

    if (location.pathname === rout.savedmovies) {
      onSearch(search, e.target.checked);
    } else if (location.pathname === rout.movies) {
      onSubmit(search, e.target.checked);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname === rout.movies) {
      onSubmit(search, check);
    } else {
      onSearch(search, check)
    }
  };

  return (
    <div className="searchform">
      <form className="searchform__conteiner" name='searchform' onSubmit={handleSubmit}>
        <div className="searchform__search">
          <label className="search">
            <input value={search || ''} className="search__input" id="search-input" type="search" onChange={handleChangeSearch} name="search" placeholder="Фильм" required></input>
          </label>
          <button type="submit" className="searchform__btn"></button>
        </div>
        <div className="searchform__filtercheckbox">
          <FilterCheckbox onChange={handleFilter} checked={check} />
        </div>
      </form>
    </div>
  );
}
