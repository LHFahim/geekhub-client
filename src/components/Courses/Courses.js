import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/course-data')
      .then(res => res.json())
      .then(data => setCourses(data));
  });

  // console.log(courses);

  return (
    <div className="w-3/4 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
