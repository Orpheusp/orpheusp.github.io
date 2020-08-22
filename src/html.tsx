import { graphql } from 'gatsby';
import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
  htmlAttributes: PropTypes.Requireable<Record<string, unknown>>;
  bodyAttributes: PropTypes.Requireable<Record<string, unknown>>;
  headComponents: React.ReactNode[];
  body: string;
  preBodyComponents: React.ReactNode[];
  postBodyComponents: React.ReactNode[];
}

const BOOTSTRAP_URL =
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap-grid.min.css';

const BOOTSTRAP_CHECKSUM =
  'sha384-AQznhoDGj2aKQxm9Hz1U8fvaEgnQDyn0LhRc1UdE2tJbig9H8xMsr4onwOB7RkPu';

/**
 * Renders the entire site.
 *
 * @param props properties and child components of the page.
 */
export default function Html(props: Props): JSX.Element {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link
          rel='stylesheet'
          href={BOOTSTRAP_URL}
          integrity={BOOTSTRAP_CHECKSUM}
          crossOrigin='anonymous'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={'body'}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
