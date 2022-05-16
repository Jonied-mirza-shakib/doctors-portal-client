import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-10 mb-20">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-4xl text-purple-900 text-center'>Welcome to Your Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
                    <li className='text-accent font-bold'><Link to='/dashboard'>My Appointment</Link></li>
                    <li className='text-accent font-bold'><Link to='/dashboard/review'>My Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;