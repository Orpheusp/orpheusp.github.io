import * as React from 'react';

import { ConnectHandle } from '../connect_handle/connect_handle';

import './connect_handles_group.scss';

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

interface Props {
  className?: string;
  inline?: boolean;
}

/** Returns a group of ConnectHandles */
export function ConnectHandlesGroup({
  className,
  inline = false,
}: Props): JSX.Element {
  const handles: JSX.Element[] = [];

  connectHandles.forEach((handle, index) => {
    handles.push(
      <ConnectHandle
        link={handle.link}
        thumbnailUrl={handle.thumbnailUrl}
        label={handle.label}
        thumbnailHighlightUrl={handle.thumbnailHighlightUrl}
        shouldShowLabel={!inline}
        key={index}
      />
    );
  });

  return <div className={className + `${inline ? '' : ' row'}`}>{handles}</div>;
}
