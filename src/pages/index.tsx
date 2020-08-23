import * as React from 'react';

import './index.scss';

import { AboutPane } from '../components/about_pane/about_pane';
import { ExperiencesPane } from '../components/experiences_pane/experiences_pane';
import { IntroPane } from '../components/intro_pane/intro_pane';
import { NavBar } from '../components/nav_bar/nav_bar';
import { FooterPane } from '../components/footer_pane/footer_pane';
import { SkillsPane } from '../components/skills_pane/skills_pane';
import { EducationPane } from '../components/education_pane/education_pane';

/** Root component that renders the entire site. */
export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <NavBar />
      <IntroPane />
      <AboutPane />
      <ExperiencesPane />
      <SkillsPane />
      <EducationPane />
      <FooterPane />
    </React.Fragment>
  );
}
