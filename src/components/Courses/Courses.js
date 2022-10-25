import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftNav from '../LeftNav/LeftNav';

const Courses = () => {
  // const [courses, setCourses] = useState([]);

  const courses = useLoaderData();

  // useEffect(() => {
  //   fetch('http://localhost:4000/course-data')
  //     .then(res => res.json())
  //     .then(data => setCourses(data));
  // });

  // console.log(courses);

  return (
    <div className="flex gap-x-10 w-5/6 mx-auto mt-10">
      <div>
        <LeftNav />
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map(course => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
