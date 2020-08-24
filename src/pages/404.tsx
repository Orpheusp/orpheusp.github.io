import * as React from 'react';

import logo from '../img/logo.svg';

import './404.scss';
import { FooterPane } from '../components/footer_pane/footer_pane';

/** Root component that renders the entire site. */
export default function Page404(): JSX.Element {
  return (
    <div className='page-404'>
      <div className='container page-404--content'>
        <div className='row page-404--logo-container'>
          <div className='col-12'>
            <a href='#'>
              <img src={logo} alt='logo' className='page-404--logo' />
            </a>
          </div>
        </div>
        <div className='row page-404--text'>
          <div className='col-12'>
            <h1>Oopsie...</h1>
            <h1>Page not found.</h1>
          </div>
        </div>
      </div>
      <FooterPane />
    </div>
  );
}
