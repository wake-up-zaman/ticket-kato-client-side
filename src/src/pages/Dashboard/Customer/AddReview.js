import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddReview.css';
import { useForm } from "react-hook-form";
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            name: user.displayName,
            photos:user.photoURL,
            rating: event.target.rating.value,
            review: event.target.description.value,
        }
        console.log(review)

        fetch('https://hidden-stream-11117.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast.success("Update Review Successful !");
                }
                else {
                    toast.error("Updating does not Successful !");
                }
            });
    }
    return (
        <div className='d-flex justify-content-center Container-main-addReview'>
            <div className='d-flex justify-content-center Container-addReview mb-5'>

                <form onSubmit={handleBooking} className='d-flex flex-column'>
                
                    <h2 className='mt-3 mb-4'>Your Valuable Comment</h2>
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control" disabled value={user?.displayName || ''} id="name" aria-describedby=""/>
                    <label for="exampleInputEmail1" class="form-label mt-2">Email</label>
                    <input type="email" class="form-control" disabled value={user?.email || ''} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <label for="rating" class="form-label mt-4">Rating   ( Max Star 5)</label>
                    <input type="number" class="form-control" name='rating' placeholder='Rating our service' required />
                    <label for="review" class="form-label mt-4">Review</label>
                    <textarea type="text" class="form-control" name="description" placeholder="Add your review" required/>
                    <label className="label mt-3">
                        <span className="label-text"></span>
                    </label>
                    <input type="submit" value="Add" className="btn btn-info mb-3"  />
                </form>
            </div>
        </div>

    );
};

export default AddReview;