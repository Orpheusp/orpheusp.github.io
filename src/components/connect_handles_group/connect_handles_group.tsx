import * as React from 'react';

import { ConnectHandle } from '../connect_handle/connect_handle';

import './connect_handles_group.scss';

const connectHandles = [
  {
    link: 'https://github.com/orpheusp',
    thumbnailUrl: require('../../img/github_logo.svg'),
    label: 'orpheusp',
  },
  {
    link: 'https://www.linkedin.com/in/weipeng29',
    thumbnailUrl: require('../../img/linkedin_logo.svg'),
    label: 'weipeng29',
  },
  {
    link: 'mailto:peng.orpheus@gmail.com',
    thumbnailUrl: require('../../img/email_logo.svg'),
    label: 'peng.orpheus@gmail.com',
  },
  {
    link: '/orpheus_peng_resume.pdf',
    thumbnailUrl: require('../../img/resume_logo.svg'),
    label: 'resume',
  },
];

interface Props {
  inline?: boolean;
}

/** Returns a group of ConnectHandles */
export function ConnectHandlesGroup({ inline = false }: Props): JSX.Element {
  const handles: JSX.Element[] = [];

  connectHandles.forEach((handle, index) => {
    handles.push(
      <ConnectHandle
        link={handle.link}
        thumbnailUrl={handle.thumbnailUrl}
        label={handle.label}
        shouldShowLabel={!inline}
        key={index}
      />
    );
  });

  return <div>{handles}</div>;
}
