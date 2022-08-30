import React from 'react';
import { FcHome } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { SiGooglechrome } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footers'>
            <div className=' text-white pt-5 pb-4'>
                <div className='container text-center text-md-left'>
                    <div className='row text-center text-md-left'>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Ticket Kato</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum sit amet,ital consectetuer lorem ipsum dolor sit amet adipisicing elit</p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>The Providers</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Creativity</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Source Files</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Bootstrap 5 alpha</a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning '>Useful Links</h5>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Your Account</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Become an Affiliates</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Shipping Rates</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Help</a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-upperacse mb-4 font-weight-bold text-warning'>Contact</h5>
                            <p>
                                <i><FcHome className='icons'></FcHome></i> New York, NY 2333, US
                            </p>
                            <p>
                                <i><MdOutlineEmail className='icons'></MdOutlineEmail></i> danielnwz420@gmail.com
                            </p>
                            <p>
                                <i><AiOutlinePhone className='icons'></AiOutlinePhone></i> 01785989199
                            </p>
                            <p>
                                <i><MdOutlineContactPhone className='icons'></MdOutlineContactPhone></i>  08163320
                            </p>
                        </div>

                        <hr className='mb-4' />

                        <div className='row align-items-center'>
                            <div className='col-md-7 col-lg-8'>
                                <p>Copyright  Ⓒ 2022 all right reserved by :
                                    <a href='#' className='text-decoration-none'>
                                        <strong className='text-warning text-decoration-none'>  Ticket Kato</strong>
                                    </a>
                                </p>
                            </div>
                            <div className='col-md-5 col-lg-4'>
                                <div className='text-center text-md-right'>
                                    <ul className='list-unstyled list-inline'>
                                        <li className='list-inline-item'>
                                            <a href='#' className='btn-floating btn-sm text-white font-size-1rm'><i><GrFacebook className='icon'></GrFacebook></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href='#' className='btn-floating btn-sm text-white font-size-1rm'><i><ImTwitter className='icon'></ImTwitter></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href='#' className='btn-floating btn-sm text-white font-size-1rm'><i><SiGooglechrome className='icon'></SiGooglechrome></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href='#' className='btn-floating btn-sm text-white font-size-1rm'><i><BsLinkedin className='icon'></BsLinkedin></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href='#' className='btn-floating btn-sm text-white font-size-1rm'><i><IoLogoYoutube className='icon'></IoLogoYoutube></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;