import * as React from 'react';

import logo from '../../img/logo.svg';

import './nav_bar.scss';

/** Component for the NavBar. */
export function NavBar(): JSX.Element {
  return (
    <nav className='navbar navbar-expand-lg nav-bar'>
      <div className='container nav-bar--container'>
        <a className='col-3 navbar-brand nav-bar--logo' href='#'>
          <img
            className='nav-bar--logo-img'
            src={logo}
            alt='logo'
            width='204'
            height='36'
          />
        </a>
      </div>
    </nav>
  );
}
