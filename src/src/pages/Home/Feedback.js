import React from 'react';
import "./Feedback.css"

const Feedback = () => {
    return (
       <div className='bodyy'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <h1 className='text-center mt-20 font-weight-bold text-4xl'>Feedback</h1>
                <hr className='bg-black'/>
                <h6 className='text-center text-2xl mt-2'>Please Write Your Feedback Below : </h6>
                <h3 className='mt-4 text-center'>How Do You Rate Your Overall Experience ? </h3>
                <form className='text-center'>
                    <label className='radio-inline'><input type="radio" name="experience" value="bad"/> Bad</label>
                    <label className='radio-inline'><input type="radio" name="experience" value="bad"/> Average</label>
                    <label className='radio-inline'><input type="radio" name="experience" value="bad"/> Good</label>

                    <div className='row'>
                        <div className='col-md-2'></div>
                        <label className='col-md-4'>Full Name*<br/>
                        <input type="text" id="text" required="" placeholder='Daniel Newaz'/></label>

                        <label className='col-md-4'>Email*<br/>
                        <input type="text" id="text" required="" placeholder='danielnw420@gmail.com'/></label>
                    </div>

                    <div className='row'>
                        <div className='col-md-2'></div>
                        <label className='col-md-4'>Age*<br/>
                        <input type="number" id="text" required="" placeholder='28'/></label>

                        <label className='col-md-4'>Phone*<br/>
                        <input type="number" id="text" required="" placeholder='01785989100'/></label>
                    </div>

                    <div className='row'>
                        <div className='col-md-2'></div>
                        <label className='col-md-8'>Message*<br/>
                        <textarea id='message' required="" placeholder='Write your message here' cols="48" rows="5"></textarea></label>

                    </div>
                    <div className='row'>
                        <div className='col-md-2 '></div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Feedback;