import React from 'react';
import {
  Outlet, Link,
} from 'react-router-dom';

const About = () => (
  <div className="about__content">
    <ul className="about__list">
      <li>
        <Link to="aboutApp">About App</Link>
      </li>
      <li>
        <Link to="aboutAuthor">About Author</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default About;
