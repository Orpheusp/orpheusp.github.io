import * as React from 'react';

/** Component for the NavBar. */
export function NavBar(): JSX.Element {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
      </div>
    </nav>
  );
}
