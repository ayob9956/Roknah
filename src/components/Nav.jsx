import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import react from '../assets/react.svg';

export default function Nav() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const navparUser = localStorage.getItem('userDetails');
  const user = JSON.parse(navparUser);

  useEffect(() => {
    const userDetails = localStorage.getItem('userData');
    if (userDetails) {
      setCurrentUser(JSON.parse(userDetails));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser(null);
    navigate('/signin'); 
  };

  return (
    <div className="shadow-md ">
      <div className="navbar bg-base-100 h-[12vh] rounded-lg border-[1px] shadow-lg">
        <div className="navbar-start">
         

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">الرئيسية</a>
              </li>
              <li>
                <a>من نحن</a>{' '}
              </li>
              <li>
                <a>الدعم</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-8" src={react} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>الرئيسية</a>
              </li>
            </Link>

            <Link to="/About">
              <li>
                <a>من نحن</a>
              </li>
            </Link>
            <Link to="/support"> 
              <li>
                <a>الدعم</a>
              </li>
            </Link>

            {currentUser || user ? (
              <Link to={"/MyReservations"}>
                <li>
                  <a>حجوزاتي</a>
                </li>
              </Link> 
            ) : null}

            {currentUser || user ? (
              <Link to={"/Data"}>
                <li>
                  <a>حسابي</a>
                </li>
              </Link> 
            ) : null}
            
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {currentUser || user ? (
            <button
              onClick={handleLogout}
              type='submit'
              className="btn btn-primary p-2 text-[12px] max-sm:btn-sm"
            >
              خروج
            </button>
          ) : (
            <Link to="/signin">
              <a className="btn btn-primary p-2 text-[12px] max-sm:btn-sm">
                تسجيل دخول
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
