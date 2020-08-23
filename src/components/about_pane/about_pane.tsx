import * as React from 'react';

import AboutPaneBackgroundClip from '../../img/about_pane_background_clip.inline.svg';

import './about_pane.scss';

/** A profile picture clipped. */
export function AboutPane(): JSX.Element {
  return (
    <div className='about-pane'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-8 about-pane--text'>
            <h6>
              Thoughtful designs and user-empowering products have always
              energized me. And as a software engineer, I have helped to bring
              many of them to life with web technologies.
            </h6>
            <h6>
              Beyond software development, I have a deep passion for art,
              photography, and music. In my spare time, you will often find me
              tinkering with Polaroid cameras 📸, meandering through art
              exhibitions 🖼, attending orchestra concerts 🎻, or maybe just at
              home watering my plants 🌱.
            </h6>
            <h6>
              If you’d like to, check out my{' '}
              <a
                href='https://linkedin.com/in/weipeng29'
                target='_blank'
                className='text-bold'
                rel='noreferrer'
              >
                LinkedIn
              </a>{' '}
              profile , get on{' '}
              <a
                href='https://github.com/orpheusp'
                target='_blank'
                className='text-bold'
                rel='noreferrer'
              >
                GitHub
              </a>{' '}
              to see what I have been up to, or take a look at my{' '}
              <a
                href='/orpheus_peng_resume.pdf'
                target='_blank'
                className='text-bold'
                rel='noreferrer'
              >
                resume
              </a>
              .
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
