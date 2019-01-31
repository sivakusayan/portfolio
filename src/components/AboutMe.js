import React from 'react';

import ABOUT_ME_COPY from '../__copy__/ABOUT_ME_COPY';

const ABOUT_ME = () => (
  <section className='section'>
      <h3 className='section__title'>About Me</h3>
      <p className='about-me__description'>{ABOUT_ME_COPY.firstParagraph}</p>
      <p className='about-me__description'>{ABOUT_ME_COPY.secondParagraph}</p>
  </section>
);

export default ABOUT_ME;
