import * as React from 'react';

import './index.scss';

import { NavBar } from '../components/nav_bar/nav_bar';

/** Root component that renders the entire site. */
export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <NavBar />
      <h1>Hello World!</h1>
    </React.Fragment>
  );
}
