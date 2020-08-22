import * as React from 'react';

import { ProfilePicture } from '../profile_picture/profile_picture';

import './intro_pane.scss';

/** A pane that shows the intro to the website */
export function IntroPane(): JSX.Element {
  return (
    <div className='intro-pane'>
      <ProfilePicture className='intro-pane--profile-picture' />
      <div className='container'>
        <div className='intro-pane--text'>
          <div className='subtitle-1 col-2'>INTRO</div>
          <h1 className='col-6'>
            <span className='text-italic'>Hey there! I&apos;m Orpheus.</span>
          </h1>
          <h4 className='col-8'>
            I am a Software Engineer in{' '}
            <span className='text-bold'>web development</span> based in{' '}
            <span className='text-bold'>San Francisco</span>, currently pursuing
            a master&apos;s degree in{' '}
            <span className='text-bold'>software management</span>.
          </h4>
        </div>
      </div>
    </div>
  );
}