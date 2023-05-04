import React from 'react'
import { NavLink } from 'react-router-dom';

function Registration() {
    return (
        <div className=' conatiner-fluid px-0 overflow-hidden'>
            <div className='row no-gutters justify-content-center '>
                <div className='col-md-6  justify-content-center'>
                    <img src="../images/login.png" className=' image ' alt="" />
                </div>
                <div className='content col-md-6 '>
                    <form className=' form1 w-75'>
                        <h1 className='text-danger '>Create an account</h1>
                        <div className="mb-3">
                            <input type="Name" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                        </div>
                        <div className="mb-3 d-flex ">
                            <input type="password" className="form-control p-3 mr-2" id="exampleInputPassword1" placeholder='Password' />
                            <input type="password" className="form-control p-3 ml-2 " id="exampleInputPassword1" placeholder='Conform Password' />
                        </div>
                        <button type="submit" className="btn btn-danger m-2">Register</button>
                        <NavLink    to="/" >
                           <button className="btn btn-primary m-2 p-2 w-25"> Login</button>
                        </NavLink>

                        
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Registration;