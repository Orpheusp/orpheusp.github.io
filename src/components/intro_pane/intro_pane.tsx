import * as React from 'react';

import { ConnectHandlesGroup } from '../connect_handles_group/connect_handles_group';
import { PaneLabel } from '../pane_label/pane_label';
import { ProfilePicture } from '../profile_picture/profile_picture';

import './intro_pane.scss';

/** A pane that shows the intro to the website */
export function IntroPane(): JSX.Element {
  const text = (
    <React.Fragment>
      <PaneLabel text={'intro'} />
      <div className='row intro-pane--greetings'>
        <div className='col-6'>
          <h1 className='text-italic'>Hey there!</h1>
          <h1 className='text-italic'>I&apos;m Orpheus.</h1>
        </div>
      </div>
      <div className='row intro-pane--intro'>
        <h4 className='col-7'>
          I am a Software Engineer in{' '}
          <span className='text-bold'>web development</span> based in{' '}
          <span className='text-bold'>San Francisco</span>, currently pursuing a
          master&apos;s degree in{' '}
          <span className='text-bold'>software management</span>.
        </h4>
      </div>
    </React.Fragment>
  );

  return (
    <div className='intro-pane'>
      <ProfilePicture className='intro-pane--profile-picture' />
      <div className='container'>
        <div className='intro-pane--content'>
          {text}
          <div className='row intro-pane--connect-handles'>
            <div className='col-12'>
              <ConnectHandlesGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
