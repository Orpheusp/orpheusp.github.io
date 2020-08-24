import * as React from 'react';

import { ConnectHandlesGroup } from '../connect_handles_group/connect_handles_group';
import { PaneLabel } from '../pane_label/pane_label';

import profilePic from '../../img/profile_pic.png';

import './intro_pane.scss';

/** A pane that shows the intro to the website */
export function IntroPane(): JSX.Element {
  const text = (
    <React.Fragment>
      <PaneLabel text={'intro'} />
      <div className='row intro-pane--greetings'>
        <div className='col-12 col-lg-6'>
          <div className='intro-pane--greetings-paragraph text-italic'>
            Hey there!
          </div>
          <div className='intro-pane--greetings-paragraph text-italic'>
            I&apos;m Orpheus.
          </div>
        </div>
      </div>
      <div className='row intro-pane--intro'>
        <div className='col-12 col-lg-7'>
          <div className='intro-pane--intro-paragraph'>
            I am a Software Engineer in{' '}
            <span className='text-bold'>web development</span> based in{' '}
            <span className='text-bold'>San Francisco</span>, currently pursuing
            a master&apos;s degree in{' '}
            <span className='text-bold'>software management</span>.
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div className='intro-pane'>
      <img src={profilePic} className='intro-pane--profile-picture' />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <img
              src={profilePic}
              className='intro-pane--profile-picture-inline'
            />
          </div>
        </div>
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
