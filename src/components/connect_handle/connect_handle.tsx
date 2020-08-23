import * as React from 'react';

import './connect_handle.scss';

interface Props {
  link?: string;
  thumbnailUrl?: string;
  thumbnailHighlightUrl?: string;
  label?: string;
}

/** A profile picture clipped. */
export function ConnectHandle({
  link,
  thumbnailUrl,
  thumbnailHighlightUrl,
  label,
}: Props): JSX.Element {
  return (
    <a className='connect-handle' href={link} target='_blank' rel='noreferrer'>
      <img className='connect-handle--thumbnail' src={thumbnailUrl} />
      <img
        className='connect-handle--thumbnail-highlight'
        src={thumbnailHighlightUrl}
      />
      <span className='connect-handle--label subtitle-2'>{label}</span>
      <div className='connect-handle--background' />
    </a>
  );
}
