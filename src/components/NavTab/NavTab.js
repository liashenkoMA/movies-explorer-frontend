import './NavTab.css';

export function NavTab() {
  return (
    <nav className='navtab'>
      <ol className='navtab__links'>
        <li>
          <a href='#aboutproject' className='navtab__link'>О проекте</a>
        </li>
        <li>
          <a href='#techs' className='navtab__link'>Технологии</a>
        </li>
        <li>
          <a href='#aboutme' className='navtab__link'>Студент</a>
        </li>
      </ol>
    </nav>
  );
}