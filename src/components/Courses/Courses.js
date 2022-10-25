import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/course-data')
      .then(res => res.json())
      .then(data => {
        console.log('Inside course useeffect:');
        console.log(data);
      });
  });

  return <div></div>;
};

export default Courses;
