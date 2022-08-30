import React from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import "./About.css";
import air from "../../assests/img.png";

const About = () => {
    return (
        <div className='home mt-16'>
            <div className='title'>
            <div className='air-animation'>
                    <div className="timer">
                        <div className='line'>
                            <GiHamburgerMenu color="#8FE5FF" size="3rem" />
                        </div>
                        <div>
                        <img src={air} alt="animation"  />
                        </div>
                    </div>
                </div>
                

                

                <div className='card-about'>
                    <h1>Welcome to <br/><span>Ticket Kato</span></h1>

                    <p>We are committed to deliver <span> The best service.</span>  Our emloy have experience in working with clients.</p>
                    <div className='d-flex'>
                    <button className='button'>Support Us</button>
                    <button className='button2'>Our Mission</button>
                    </div>
                </div>
            </div>
            <div className='space-body'>
              <div className='space'>
                 <span className='sun'></span>
                 <span className=' planet planet1'></span>
                 <span className=' planet planet2'></span>
                 <span className=' planet planet3'></span>
                 <span className='planet planet4'></span>
              </div>
            </div>
        </div>
    );
};

export default About;