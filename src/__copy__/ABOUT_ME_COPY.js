// Stores the copy for the about me page. We could just store strings here
// and automatically build the paragraphs in the AboutMe component,
// but then we would be limited to using plain text. If we build the
// paragraphs manually here, we can add things such as bolding and links.

import React from 'react';

const paragraphClassName = 'about-me__description';

const firstParagraph = (
  <p 
    className={paragraphClassName}
  >
    I'm Sayan Sivakumaran, and I am a developer who makes websites that are maintainable, responsive, and cross-browser compatible. Using technologies such as JavaScript and React, I can create anything from a single page application (SPA) to something more involved like a full-stack app.
  </p>
);

const secondParagraph = (
  <p 
    className={paragraphClassName}
  >
    I am currently going through Keith J. Grant's <a target='_blank' rel='noopener' className='link' href='https://www.manning.com/books/css-in-depth'>CSS in Depth</a>, as I believe writing non-hacky, maintainable CSS is an often important yet unrecognized skill. I am also working on my UX design, as I want to make sure that my applications are as easy and convenient for the user as possible. When I'm not working on some code, you can find me enjoying a nice Stephen King novel or improving my skills in the kitchen.
  </p>
);

const ABOUT_ME = [firstParagraph, secondParagraph];

export default ABOUT_ME;
