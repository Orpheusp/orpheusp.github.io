import * as React from 'react';

import { PaneLabel } from '../pane_label/pane_label';

import './education_pane.scss';

interface EducationInfo {
  schoolName: string;
  period: string;
  degrees: string[];
  thumbnailUrl: string;
}

interface EducationInfoItemProps {
  educationInfo: EducationInfo;
  className?: string;
}

const educationInfos: EducationInfo[] = [
  {
    schoolName: 'Carnegie Mellon University',
    period: '2020-2021',
    degrees: ['M.S. Software Management'],
    thumbnailUrl: require('../../img/cmu_wordmark.png'),
  },
  {
    schoolName: 'Denison University',
    period: '2013-2017',
    degrees: ['B.S. Computer Science', 'B.A. Mathematics'],
    thumbnailUrl: require('../../img/denison_wordmark.png'),
  },
  {
    schoolName: 'University of Edinburgh',
    period: '2016',
    degrees: ['Non-degree, Study Abroad'],
    thumbnailUrl: require('../../img/uoe_wordmark.png'),
  },
];

function EducationInfoItem({
  educationInfo,
  className,
}: EducationInfoItemProps): JSX.Element {
  const degreesGroup: JSX.Element[] = [];

  educationInfo.degrees.forEach((degree) => {
    degreesGroup.push(
      <div className='body-2' key={degree}>
        {degree}
      </div>
    );
  });

  return (
    <div className={`degree-item ${className}`}>
      <img
        src={educationInfo.thumbnailUrl}
        className='degree-item--thumbnail'
      />
      <div className='degree-item--details'>
        <div className='subtitle-2'>{educationInfo.period}</div>
        {degreesGroup}
      </div>
    </div>
  );
}

/** A pane that shows a list of degree information */
export function EducationPane(): JSX.Element {
  const educationInfosGroup: JSX.Element[] = [];

  educationInfos.forEach((educationInfo) => {
    educationInfosGroup.push(
      <EducationInfoItem
        educationInfo={educationInfo}
        key={educationInfo.schoolName}
        className={'col-4'}
      />
    );
  });

  return (
    <div className='education-pane'>
      <div className='container'>
        <PaneLabel text='education' />
        <div className='row'>{educationInfosGroup}</div>
      </div>
    </div>
  );
}
