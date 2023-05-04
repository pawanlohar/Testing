import React from 'react'
import "./login.css";
import { NavLink } from 'react-router-dom';


function LoginPopup() {

    return (
        <div className=' conatiner-fluid px-0 mt-5 border overflow-hidden '>
            <div className='row no-gutters justify-content-center '>
                <div className='col-md-6  justify-content-center'>
                    <img src="../images/login.png" className=' image ' alt="" />
                </div>
                <div className='content col-md-6 '>
               
                    <form className=' form1 w-75'>
                    <h1 className='text-danger '>Welcome Back!</h1>
                        <div className="mb-3 mt-5">
                            <input type="email" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control p-3" id="exampleInputPassword1" placeholder='Password' />
                        </div>
                        <div className='d-flex'>
                            <button type="submit" className="btn btn-danger ">Login</button>

                            <NavLink className="nav-link" to="/registration" >
                                <button className='btn btn-primary ml-2 '>Register Now</button>
                            </NavLink>
                        </div>



                    </form>
                </div>
            </div>
        </div>



    )
}

export default LoginPopup;