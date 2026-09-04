import React from 'react';

function About() {
  return (
    <div className="page">
      <h1>About this app</h1>
      <p className="description">
        The Student Course Management Application is a demo built with React and React
        Router. It shows how to structure multi-page apps with client-side routing,
        dynamic routes for individual course pages, and the Context API for sharing
        student information across components without prop drilling.
      </p>
      <p className="description">
        Built with functional components and hooks throughout, including{' '}
        <code>useState</code>, <code>useContext</code>, and <code>useParams</code>.
      </p>
    </div>
  );
}

export default About;
