import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import {SiThemoviedatabase} from "react-icons/si";
import {BiCameraMovie, BiMoviePlay} from "react-icons/bi";

function Navbar(props) {
  return (
    <> <div className='container-fluid text-light' style={{backgroundColor:"#323232"}}>
      <div className="container  text-light">
        <header className="p-3 mb-3 border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-start justify-content-between">
              <div className="d-flex link-light text-light">

              <Link to="" className="nav-link px-2 link-light">
              👋𝒥𝑒𝓇𝒾𝒸𝒽𝑜'𝓈 𝑀𝒾𝒹𝓉𝑒𝓇𝓂
                </Link>

                <Link
                  to=""
                  className="nav-link px-2 justify-content-start link-light"
                >
                  {' '}
                  {' '}
                  𝐻𝑜𝓂𝑒
                </Link>
                <Link to="popular" className="nav-link px-2 link-light">
                  {' '}
                  𝒫𝑜𝓅𝓊𝓁𝒶𝓇
                </Link>
                <Link to="toprated" className="nav-link px-2 link-light">
                𝒯𝑜𝓅 𝑅𝒶𝓉𝑒𝒹
                </Link>
                </div>
            </div>
          </div>
        </header>
      </div>
      </div>
    </>
  );
}

export default Navbar;
