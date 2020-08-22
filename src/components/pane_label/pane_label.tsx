import * as React from 'react';

import './pane_label.scss';

interface Props {
  text: string;
}

/** A label for a pane */
export function PaneLabel({ text }: Props): JSX.Element {
  return <div className='subtitle-1 col-2 pane-label'>{text}</div>;
}
