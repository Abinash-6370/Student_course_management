import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';
import { useStudent } from '../context/StudentContext';

function Courses() {
  const { student } = useStudent();

  return (
    <div className="page">
      <h1>Courses</h1>
      <p className="subtitle">Browse available courses and view their details.</p>

      <ul className="course-list">
        {courses.map((course) => {
          const isEnrolled = student.enrolledCourses.includes(course.id);
          return (
            <li key={course.id} className="course-item">
              <Link to={`/course/${course.id}`} className="course-title">
                {course.title}
              </Link>
              <span className="course-meta">
                {course.instructor} &middot; {course.credits} credits
              </span>
              {isEnrolled && <span className="badge">Enrolled</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Courses;
