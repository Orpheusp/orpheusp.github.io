import * as React from 'react';

import aboutPaneBackground from '../../img/about_pane_background.svg';

import { PaneLabel } from '../pane_label/pane_label';

import './about_pane.scss';

/** A pane that contains a blurb of myself. */
export function AboutPane(): JSX.Element {
  return (
    <div className='about-pane'>
      <div className='container about-pane--text'>
        <PaneLabel text='about' className='offset-md-1 offset-lg-2' />
        <div className='row'>
          <div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
            <div className='about-pane--paragraph'>
              Thoughtful designs and user-empowering products have always
              energized me. And as a software engineer, I have helped to bring
              many of them to life with web technologies.
            </div>

            <div className='about-pane--paragraph'>
              Beyond software development, I have a deep passion for art,
              photography, and music. In my spare time, you will often find me
              tinkering with Polaroid cameras 📸, meandering through art
              exhibitions 🖼, attending orchestra concerts 🎻, or maybe just at
              home watering my plants 🌱.
            </div>

            <div className='about-pane--paragraph'>
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
            </div>
          </div>
        </div>
        <img src={aboutPaneBackground} className='about-pane--background' />
      </div>
    </div>
  );
}
