import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div className="w-3/12 mx-auto mt-10">
      <h1 className="text-2xl">Checkout page</h1>
      <h2 className="text-3xl font-bold mt-10">
        You are about to buy the course {courseData.name}{' '}
      </h2>
    </div>
  );
};

export default Checkout;
