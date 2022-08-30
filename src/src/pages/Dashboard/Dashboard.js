import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
// import Footer from '../Shared/Footer';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile pt-16">
            <input id="html-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='pb-2 pt-6 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>Dashboard</h2>
                </div>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="html-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}

                    <li><Link to='/dashboard/myProfile' className='hover:bg-violet-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >My Profile</Link></li>
                    <li><Link to='/dashboard/addReview' className='hover:bg-violet-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >Add Review</Link></li>
                   
                    {
                        admin && <>
                        <li><Link to='/dashboard/userPanel' className='hover:bg-violet-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >User Panel</Link></li>
                        <li><Link to='/dashboard/addBuses' className='hover:bg-violet-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >Add Buses</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;