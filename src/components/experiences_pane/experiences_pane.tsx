import * as React from 'react';

import { PaneLabel } from '../pane_label/pane_label';

import './experiences_pane.scss';

interface Job {
  position: string;
  company: string;
  period: string;
  details: JSX.Element;
}

const experiences: Job[] = [
  {
    position: 'Software Engineer',
    company: 'YouTube, Google LLC',
    period: 'JUN 2017 - JUL 2020',
    details: (
      <React.Fragment>
        <div className='body-1'>
          I worked on <span className='text-bold'>YouTube main app on TV</span>.
          Each month, over 100 million users open our app to watch YouTube
          videos on their big screens.
        </div>
        <div className='body-1'>
          My work mostly focuses on building user-facing features and
          implementing UI redesigns for the app’s video viewing interface using
          <span className='text-bold'>TypeScript</span>,{' '}
          <span className='text-bold'>SASS</span>,{' '}
          <span className='text-bold'>HTML</span>, and{' '}
          <span className='text-bold'>Python</span>.
        </div>
        <div className='body-1'>
          In 2019, I joined the effort to rewrite the entire app using a brand
          new reactive UI framework written in{' '}
          <span className='text-bold'>TypeScript</span> and adopt{' '}
          <span className='text-bold'>Storybook</span> in development and UI
          testing.
        </div>
      </React.Fragment>
    ),
  },
  {
    position: 'Software Engineering Intern',
    company: 'Google LLC',
    period: 'MAY 2016 - AUG 2016',
    details: (
      <React.Fragment>
        <div className='body-1'>
          During my 2nd internship at Google, I built UI components for{' '}
          <span className='text-bold'>Google Cloud Platform Console</span> using
          <span className='text-bold'>AngularJS</span>,{' '}
          <span className='text-bold'>Karma</span>,{' '}
          <span className='text-bold'>Protractor</span>,{' '}
          <span className='text-bold'>HTML</span>, and{' '}
          <span className='text-bold'>CSS</span>.
        </div>
        <div className='body-1'>
          I also implemented various UI A/B test variants to study user
          on-boarding experience with UX and product.
        </div>
      </React.Fragment>
    ),
  },
  {
    position: 'Engineering Practicum Intern',
    company: 'Google LLC',
    period: 'MAY 2015 - AUG 2015',
    details: (
      <React.Fragment>
        <div className='body-1'>
          In my 1st internship at Google, my intern partner and I built an
          end-to-end <span className='text-bold'>Google Smart Lock</span>{' '}
          prototype on iOS. I focused on building UI components for the
          prototype, with internationalization and dynamic layout support.
        </div>
        <div className='body-1'>
          Additonally, I also implemented a new Google account sign-in flow
          based on app extension for{' '}
          <span className='text-bold'>Google Sign-In SDK on iOS</span> using
          <span className='text-bold'>Objective-C</span>.
        </div>
      </React.Fragment>
    ),
  },
];

/** Returns fragment of job overview. */
function getJobOverview(position: string, company: string, period: string) {
  return (
    <React.Fragment>
      <h5>{position}</h5>
      <h6 className='text-italic'>{company}</h6>
      <div className='subtitle-2'>{period}</div>
    </React.Fragment>
  );
}

/** Returns a row of an experience. */
function getJob(job: Job) {
  return (
    <div className='row experiences-pane--job-row'>
      <div className='col-4'>
        {getJobOverview(job.position, job.company, job.period)}
      </div>
      <div className='col-1' />
      <div className='col-7'>{job.details}</div>
    </div>
  );
}

/** A pane that lists out all professional experiences. */
export function ExperiencesPane(): JSX.Element {
  const experiencesGroup: JSX.Element[] = [];

  experiences.forEach((experience, index) => {
    experiencesGroup.push(getJob(experience));
  });

  return (
    <div className='experiences-pane'>
      <div className='container experiences-pane--content'>
        <PaneLabel text='experiences' />
        {experiencesGroup}
      </div>
    </div>
  );
}
