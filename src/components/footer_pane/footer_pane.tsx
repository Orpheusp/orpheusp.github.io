import * as React from 'react';

import { ConnectHandlesGroup } from '../connect_handles_group/connect_handles_group';

import './footer_pane.scss';

/** A pane that shows the footer */
export function FooterPane(): JSX.Element {
  return (
    <div className='footer-pane'>
      <div className='container'>
        <div className='row'>
          <ConnectHandlesGroup className='col-4' inline={true} />
          <div className='col-2' />
          <div className='col-6 footer-pane--footnote'>
            <div className='subtitle-2'>
              made in 2020. hosted at{' '}
              <a
                href='https://github.com/Orpheusp/orpheusp.github.io'
                target='_blank'
                rel='noreferrer'
                className='text-bold'
              >
                github
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
