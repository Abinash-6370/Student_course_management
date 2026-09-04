import React from 'react';
import { Link } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';

function Home() {
  const { student } = useStudent();

  return (
    <div className="page">
      <h1>Welcome back, {student.name.split(' ')[0]}</h1>
      <p className="subtitle">Here's a quick look at your student profile.</p>

      <div className="card">
        <div className="card-row">
          <span className="label">Student ID</span>
          <span>{student.id}</span>
        </div>
        <div className="card-row">
          <span className="label">College</span>
          <span>{student.college}</span>
        </div>
        <div className="card-row">
          <span className="label">Courses enrolled</span>
          <span>{student.enrolledCourses.length}</span>
        </div>
      </div>

      <p className="footer-link">
        View all available courses on the <Link to="/courses">Courses</Link> page.
      </p>
    </div>
  );
}

export default Home;
