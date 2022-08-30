import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = ({ review }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 text-center review w-75 mt-5 mx-auto'>
            <div class="card reviews">
                <div class="card-body">
                    <div className='w-100 reviewImg'>
                        {
                            review.photos ? <img className='' src={review.photos} alt="" /> : <img className='' src='https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png' alt="" />
                        }
                    </div>
                    <h2 className='mt-2 name'>{review.name}</h2>
                    <div className='mb-2 d-flex justify-content-center align-items-center'>
                        {(review.rating === '1' || review.rating === 1) && <div class="rating  d-flex justify-content-center align-items-center">
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                        </div>}
                        {(review.rating === '2' || review.rating === 2) && <div class="rating d-flex">
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>


                        </div>}
                        {(review.rating === '3' || review.rating === 3) && <div class="rating d-flex">
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                        </div>}
                        {(review.rating === '4' || review.rating === 4) && <div class="rating d-flex  ">
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='faka me-2'><FaStar></FaStar></p>
                        </div>}
                        {(review.rating === '5' || review.rating === 5) && <div class="rating d-flex">
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            <p className='fill me-2'><FaStar></FaStar></p>
                            {/* <input type="radio" name="rating-1" class="mask mask-star" /> */}
                        </div>}
                    </div>
                    <h5 class="card-title">{review.review}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;