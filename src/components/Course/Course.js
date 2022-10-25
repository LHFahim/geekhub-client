import React from 'react';

const Course = ({ course }) => {
  const { id, name, img, description } = course;

  // console.log(id, name, img, description);

  return (
    <div className="p-5 rounded-xl shadow-2xl  border border-indigo-600">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3> {name} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Course;
