import React from 'react'
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className='container-fluid fixed-top px-0 border overflow-hidden bg-light'>
        <div className="row no-gutters justify-content-center">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand"><i className="bi bi-border-all "></i>Flow 1</span>
              <form className="d-flex">
                  <NavLink className="nav-link" to="/registration" >
                    Signup
                  </NavLink>
                 
              </form>
            </div>
          </nav>
        </div>
      </div>


      <div className="container-fluid border mt-5 ">

      </div>

    </>
  )
}


export default Home;