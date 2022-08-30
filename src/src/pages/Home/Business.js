import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { FaBusAlt } from "react-icons/fa";
import CountUp, { useCountUp } from "react-countup";
import './Business.css';


const Business = () => {
    useCountUp({
        ref: "counter",
        end: 10,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
    });
    useCountUp({
        ref: "counter2",
        end: 160,
        enableScrollSpy: true,
        scrollSpyDelay: 100
    });
    useCountUp({
        ref: "counter3",
        end: 50,
        enableScrollSpy: true,
        scrollSpyDelay: 100
    });
    useCountUp({
        ref: "counter4",
        end: 1280,
        enableScrollSpy: true,
        scrollSpyDelay: 100
    });
    return (
        <div className='summary py-3'>
            <h2 className='text-center pt-5 font-bold text-3xl'>A E-ticketing Company You Can Count On</h2>
            <div className='counter-up'>
                <div className='content'>
                    <div className='box'>
                        <div class='icon'><BsPeopleFill /></div>
                        <div class='counter'><enableScrollSpy /><span id="counter" />M+</div>
                        <div class='text'>Customers</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><HiBriefcase /></div>
                        <div class='counter'><enableScrollSpy /><span id="counter2" />+</div>
                        <div class='text'>Companies</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><FaCommentDots /></div>
                        <div class='counter'><enableScrollSpy /><span id="counter3" />K+</div>
                        <div class='text'>Reviews</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><FaBusAlt /></div>
                        <div class='counter'><enableScrollSpy /><span id="counter4" />+</div>
                        <div class='text'>Total Vehicles</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Business;
