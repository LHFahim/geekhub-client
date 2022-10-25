import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/course-data')
      .then(res => res.json())
      .then(data => setCourses(data));
  });

  return (
    <div className="rounded-xl border p-3 border-indigo-600">
      <ul className="space-y-4">
        {courses.map(course => (
          <li className=" p-2 rounded hover:bg-indigo-400">
            <Link to={`course/${course.id}`}> {course.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNav;
