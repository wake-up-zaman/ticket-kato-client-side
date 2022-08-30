import React from "react";
import { useTypewriter } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/'; 
import "./Banner.css";
import Typed from 'react-typed';

const Banner = () => {
  // const { text } = useTypewriter({
  //   words: ["Bus", "Train", "Launch", "Domestic Airline"],
  //   loop: Infinity,
  //   onLoopDone: () => console.log(`loop completed after 3 runs.`),
  // });



    return (
        <div className='banner'>
            <div className='main-div-banner'>
                <div>
                        <div>
                          <h1>
                <Typed
                    strings={['Book Your Tickets Fors']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Bus',
                    'Train',
                    'Launch',
                  'Domestic Airline']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input className="text-center mt-2" type="text"/>
                </Typed>
                </h1>
                <p className='text-center'>Safe, Secure, Reliable Ticketing!</p>
              </div>
                </div>
            </div>
  </div>
  );
};

export default Banner;