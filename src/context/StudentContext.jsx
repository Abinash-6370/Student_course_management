import React, { createContext, useState, useContext } from 'react';

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: 'Abhinash',
    id: '24CSEAIML107',
    college: 'GIET UNIVERSITY',
    enrolledCourses: ['1', '3', '5'],
  });

  const enrollInCourse = (courseId) => {
    setStudent((prev) => {
      if (prev.enrolledCourses.includes(courseId)) return prev;
      return { ...prev, enrolledCourses: [...prev.enrolledCourses, courseId] };
    });
  };

  return (
    <StudentContext.Provider value={{ student, setStudent, enrollInCourse }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
}

export default StudentContext;
