import * as React from 'react';

import './index.scss';

import { AboutPane } from '../components/about_pane/about_pane';
import { AboutPaneBackground } from '../components/about_pane_background/about_pane_background';
import { ExperiencesPane } from '../components/experiences_pane/experiences_pane';
import { IntroPane } from '../components/intro_pane/intro_pane';
import { NavBar } from '../components/nav_bar/nav_bar';
import { FooterPane } from '../components/footer_pane/footer_pane';

/** Root component that renders the entire site. */
export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <NavBar />
      <IntroPane />
      <div className='pane-background'>
        <AboutPaneBackground className='pane-background--background' />
      </div>
      <AboutPane />
      <ExperiencesPane />
      <FooterPane />
    </React.Fragment>
  );
}
