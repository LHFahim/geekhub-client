import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error));
  };

  return (
    <div className="w-6/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-10">Register here</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Your full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            placeholder="Full name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Your photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            placeholder="photo url"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium ">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            required
          />
        </div>

        <button className="py-2 px-3 bg-indigo-600 rounded text-white">
          Register
        </button>
      </form>

      <p className="my-3">
        Already have an account? Login{' '}
        <Link className="text-indigo-800" to="/login">
          here
        </Link>{' '}
      </p>

      <p>{error}</p>
    </div>
  );
};

export default Register;
