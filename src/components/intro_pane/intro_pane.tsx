import * as React from 'react';

import { ConnectHandle } from '../connect_handle/connect_handle';
import { PaneLabel } from '../pane_label/pane_label';
import { ProfilePicture } from '../profile_picture/profile_picture';

import './intro_pane.scss';

const connectHandles = [
  {
    link: 'https://github.com/orpheusp',
    thumbnailUrl: require('../../img/github_logo.png'),
    thumbnailHighlightUrl: require('../../img/github_logo_highlight.png'),
    label: 'orpheusp',
  },
  {
    link: 'https://www.linkedin.com/in/weipeng29',
    thumbnailUrl: require('../../img/linkedin_logo.png'),
    thumbnailHighlightUrl: require('../../img/linkedin_logo_highlight.png'),
    label: 'weipeng29',
  },
  {
    link: 'mailto:peng.orpheus@gmail.com',
    thumbnailUrl: require('../../img/email_logo.png'),
    thumbnailHighlightUrl: require('../../img/email_logo_highlight.png'),
    label: 'peng.orpheus@gmail.com',
  },
  {
    link: '/orpheus_peng_resume.pdf',
    thumbnailUrl: require('../../img/resume_logo.png'),
    thumbnailHighlightUrl: require('../../img/resume_logo_highlight.png'),
    label: 'resume',
  },
];

/** A pane that shows the intro to the website */
export function IntroPane(): JSX.Element {
  const text = (
    <React.Fragment>
      <PaneLabel text={'intro'} />
      <h1 className='col-6'>
        <span className='text-italic'>Hey there! I&apos;m Orpheus.</span>
      </h1>
      <h4 className='col-8'>
        I am a Software Engineer in{' '}
        <span className='text-bold'>web development</span> based in{' '}
        <span className='text-bold'>San Francisco</span>, currently pursuing a
        master&apos;s degree in{' '}
        <span className='text-bold'>software management</span>.
      </h4>
    </React.Fragment>
  );

  const handles: JSX.Element[] = [];

  connectHandles.forEach((handle, index) => {
    handles.push(
      <ConnectHandle
        link={handle.link}
        thumbnailUrl={handle.thumbnailUrl}
        label={handle.label}
        thumbnailHighlightUrl={handle.thumbnailHighlightUrl}
        key={index}
      />
    );
  });

  const handleContainer = (
    <div className='intro-pane--handles col-12'>{handles}</div>
  );

  return (
    <div className='intro-pane'>
      <ProfilePicture className='intro-pane--profile-picture' />
      <div className='container'>
        <div className='intro-pane--content'>
          {text}
          {handleContainer}
        </div>
      </div>
    </div>
  );
}
