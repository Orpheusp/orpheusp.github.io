import { graphql } from 'gatsby';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { JsxEmit } from 'typescript';

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

const MONTSERRAT =
  'family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900';

const ROBOTO = 'family=Roboto:ital,wght@0,300;0,400;1,300;1,400';

const FONTS_URL = `https://fonts.googleapis.com/css2?${MONTSERRAT}&${ROBOTO}&display=swap`;

/**
 * Renders the entire site.
 *
 * @param props properties and child components of the page.
 */
export default function Html(props: Props): JSX.Element {
  const favicon = (
    <React.Fragment>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#2e597b' />
      <meta name='msapplication-TileColor' content='#2e597b' />
      <meta name='theme-color' content='#ffffff' />
    </React.Fragment>
  );

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
        <link rel='stylesheet' href={FONTS_URL} />
        {favicon}
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
