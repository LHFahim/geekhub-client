import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');

  const { signIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || '/';

  // email pass login
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        form.reset();
        setError('');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  // google login

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  // github sign in
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="w-6/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-10">Please login </h1>
      <div>
        <form onSubmit={handleSubmit}>
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
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
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
            Login
          </button>
          <p className="my-3">
            Don't have an account? Register{' '}
            <Link className="text-indigo-800" to="/register">
              here
            </Link>{' '}
          </p>
        </form>
        <p>{error}</p>
        <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0">
          <button
            onClick={handleGoogleSignIn}
            className="py-3 px-5 bg-yellow-800 text-white rounded-2xl"
          >
            Login with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="py-3 px-5 bg-zinc-700 rounded-2xl text-white"
          >
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
