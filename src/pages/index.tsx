import * as React from 'react';

import './index.scss';

import { NavBar } from '../components/nav_bar/nav_bar';
import { IntroPane } from '../components/intro_pane/intro_pane';

/** Root component that renders the entire site. */
export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <NavBar />
      <IntroPane />
    </React.Fragment>
  );
}
