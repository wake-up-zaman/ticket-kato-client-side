import React, { useEffect, useState } from 'react';
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiShipLine } from "react-icons/ri";
import { GiCommercialAirplane } from "react-icons/gi";
import './Search.css';
import { DatePicker } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import { NavLink, Outlet } from "react-router-dom";


const Search = () => {
    return (
        <div className='d-flex justify-content-center search p-lg-5 p-sm-0 shadow-lg'>
            <div className='search-container search-main p-lg-4 p-sm-0 mt-sm-0 w-lg-75 w-sm-100'>
                <div className='text-center search-title mb-3'>
                    <p className='ticketTitle'>Find Your Tickets</p>
                </div>
                <div className='w-lg-100 d-flex justify-content-center flex-lg-row flex-sm-column flex-sm-wrap flex-lg-nowrap search-content'>
                    <div className='w-lg-100 w-sm-100 d-flex justify-content-evenly search-icon-container  '>
                        <div className='text-center'>
                            <NavLink className='search-bar' to='/'>
                                <BiBus className='search-icon' />
                                <p className='search-icon-name'>Buses</p>
                            </NavLink>

                        </div>
                        {/* <div className='text-center'>
                        <NavLink className='search-bar' to='/bus'>
                            <BiBus className='search-icon' />
                            <p className='search-icon-name'>Buses</p>
                            </NavLink>
                            
                        </div> */}
                        <div className='text-center'>
                            <NavLink className='search-bar' to='/flight'>
                                <GiCommercialAirplane className='search-icon' />
                                <p className='search-icon-name'>Flights</p>
                            </NavLink>
                        </div>

                        <div className='text-center'>
                            <NavLink className='search-bar' to='/train'>
                                <IoMdTrain className='search-icon' />
                                <p className='search-icon-name'>Trains</p>
                            </NavLink>

                        </div>

                        <div className='text-center'>
                            <NavLink className='search-bar' to='/launch'>
                                <RiShipLine className='search-icon' />
                                <p className='search-icon-name'>Launches</p>
                            </NavLink>

                        </div>
                    </div>
                </div>
                <Outlet />
            </div>


        </div>
    );
};

export default Search;