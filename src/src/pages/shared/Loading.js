import React from 'react';
// import { Circles } from "react-loader-spinner"; 
import Lottie from "react-lottie";
import loader from "../../assests/loader.json"


const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
   return (
     <div className="d-flex row justify-content-center align-items-center mb-3 mx-5 my-4">
       {/* <Circles
         className="d-flex my-5 justify-content-center align-items-center"
         color="#00BFFF"
         height={180}
         width={180}
       /> */}
         <Lottie
           className=""
           options={defaultOptions}
           height={300}
           width={300}
         />
     </div>
   );
};

export default Loading;