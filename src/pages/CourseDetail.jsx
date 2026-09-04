import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import courses from '../data/courses';
import { useStudent } from '../context/StudentContext';

function CourseDetail() {
  const { id } = useParams();
  const { student, enrollInCourse } = useStudent();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isEnrolled = student.enrolledCourses.includes(course.id);

  return (
    <div className="page">
      <Link to="/courses" className="back-link">
        &larr; Back to courses
      </Link>

      <h1>{course.title}</h1>
      <p className="subtitle">
        {course.instructor} &middot; {course.credits} credits
      </p>

      <p className="description">{course.description}</p>

      {isEnrolled ? (
        <span className="badge">You're enrolled in this course</span>
      ) : (
        <button className="enroll-btn" onClick={() => enrollInCourse(course.id)}>
          Enroll in this course
        </button>
      )}
    </div>
  );
}

export default CourseDetail;
