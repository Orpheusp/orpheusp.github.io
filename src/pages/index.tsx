import * as React from 'react';

import './index.scss';

import { NavBar } from '../components/nav_bar/nav_bar';
import { ProfilePicture } from '../components/profile_picture/profile_picture';

/** Root component that renders the entire site. */
export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <NavBar />
      <ProfilePicture />
    </React.Fragment>
  );
}
