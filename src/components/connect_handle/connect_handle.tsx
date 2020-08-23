import * as React from 'react';

import './connect_handle.scss';

interface Props {
  link?: string;
  thumbnailUrl?: string;
  label?: string;
  shouldShowLabel: boolean;
}

/** A link to a social handle */
export function ConnectHandle({
  link,
  thumbnailUrl,
  label,
  shouldShowLabel,
}: Props): JSX.Element {
  return (
    <a className='connect-handle' href={link} target='_blank' rel='noreferrer'>
      <img className='connect-handle--thumbnail' src={thumbnailUrl} />
      {shouldShowLabel && (
        <span className='connect-handle--label subtitle-2'>{label}</span>
      )}
      <div className='connect-handle--background' />
    </a>
  );
}
