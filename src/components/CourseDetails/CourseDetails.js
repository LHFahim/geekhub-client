import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { id, name, img, description } = courseData;

  // react to pdf

  return (
    <div>
      <div ref={ref} className="w-3/4 mx-auto">
        <h1 className="text-3xl font-bold my-10 text-center">Course details</h1>
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className="space-y-5 my-5 w-10/12 mx-auto px-10 py-5 border border-indigo-600">
          <h3 className="text-2xl font-bold">
            {name}{' '}
            <ReactToPdf targetRef={ref} filename="Course-details.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <FaDownload className="inline" />
                </button>
              )}
            </ReactToPdf>
          </h3>

          <p>{description}</p>

          <button className="py-3 px-5 rounded text-white bg-indigo-700">
            <Link to={`/checkout/${id}`}> Get premium access!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
