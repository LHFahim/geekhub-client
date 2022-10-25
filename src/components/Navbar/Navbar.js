import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from './logo.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  };

  return (
    <div className="md:w-11/12 mx-auto mt-5">
      <div className="navbar bg-base-100 border border-indigo-600 rounded-3xl">
        <div className="flex-1">
          <img className="h-10" src={logo} alt="" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            GeekHub
          </Link>
        </div>
        <div className="flex-none">
          <>
            {user?.uid ? (
              <>
                <span>
                  {user ? (
                    <img
                      className="h-10 rounded mr-2"
                      src={user.photoURL}
                      title={user.displayName}
                      alt=""
                    />
                  ) : null}
                </span>
                <button variant="light" onClick={handleLogOut}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link className="mr-2" to="/login">
                  Login
                </Link>

                <Link to="/register">Register</Link>
              </>
            )}
          </>
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Courses</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <input type="checkbox" className="toggle" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
