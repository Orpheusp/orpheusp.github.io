import * as React from 'react';

import AboutPaneBackgroundClip from '../../img/about_pane_background_clip.inline.svg';

import './about_pane_background.scss';

interface Props {
  className?: string;
}

/** About pane background. */
export function AboutPaneBackground({ className }: Props): JSX.Element {
  return (
    <div className={`about-pane-background ${className}`}>
      <AboutPaneBackgroundClip />
      <div className='about-pane-background--background-container'>
        <div className='about-pane-background--background' />
      </div>
    </div>
  );
}
