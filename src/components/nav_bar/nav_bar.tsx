import * as React from 'react';

import './nav_bar.scss';

/** Component for the NavBar. */
export function NavBar(): JSX.Element {
  return (
    <nav className='navbar navbar-expand-lg nav-bar'>
      <div className='container nav-bar--container'>
        <a className='navbar-brand nav-bar--logo' href='#'>
          Navbar
        </a>
      </div>
    </nav>
  );
}
