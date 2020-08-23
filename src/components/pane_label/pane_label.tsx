import * as React from 'react';

import './pane_label.scss';

interface Props {
  className?: string;
  text: string;
}

/** A label for a pane */
export function PaneLabel({ text, className }: Props): JSX.Element {
  return (
    <div className='row'>
      <div className={`subtitle-1 col-2 pane-label ${className}`}>{text}</div>
    </div>
  );
}
