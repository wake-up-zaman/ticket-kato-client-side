import React from 'react';
import Lottie from "react-lottie";
import notFound from '../../assests/404.json'

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <Lottie
                className="mx-3 mb-3"
                options={defaultOptions}
                height={700}
                width={700}
            />
        </div>
    );
};

export default NotFound;