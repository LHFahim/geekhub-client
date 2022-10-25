import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  const { id, name, img, description } = course;

  // console.log(id, name, img, description);

  return (
    <div className="p-5 rounded-xl shadow-2xl  border border-indigo-600">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="space-y-5 mt-2">
        <h3 className="text-2xl font-bold"> {name} </h3>
        <p>{description.substring(0, 150)}...</p>
        <Link className="text-indigo-600 font-semibold" to={`/course/${id}`}>
          Click to read more
        </Link>
      </div>
    </div>
  );
};

export default Course;
