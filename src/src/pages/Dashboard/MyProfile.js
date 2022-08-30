import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery(['user'], () => fetch(`https://hidden-stream-11117.herokuapp.com/users/${user.email}`, {


        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleUpdateProfile = event => {
        event.preventDefault()
        const email = user?.email
        const updatedUser = {
            name: user.displayName,
            education: event.target.education.value,
            address: event.target.address.value,
            img: event.target.photo.value,
            phone: event.target.phone.value,
        }
        console.log(updatedUser)
        if (email) {
            fetch(`https://hidden-stream-11117.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(updatedUser)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success('Profile Updated!')
                        event.target.education.value = ''
                        event.target.address.value = ''
                        event.target.photo.value = ''
                        event.target.phone.value = ''
                        refetch()
                    }
                })
        }
    }

    return (
        <div className='pb-10'>
            <h1 className='text-3xl text-slate-200 font-bold text-center py-10'>Your Profile</h1>
            <div class="hero bg-base-600">
                <div class="hero-content m-0 p-0 flex-col lg:flex-row">
                    <div>
                        <div className='flex justify-center'>
                            <div class="card w-96 bg-slate-200 shadow-xl">
                                <div class="card-body">


                                   {/* {
                                        data.img && <div class="avatar justify-center">

                                   {
                                        data?.img && <div class="avatar justify-center">

                                            <div class="w-36 rounded-full ">
                                                <img src={data.img} alt='' />
                                            </div>
                                        </div>
                                    } */}
                                   {/* {
                                        user?.photoURL?
                                         <div class="avatar justify-center">
                                            <div class="w-36 rounded-full ">
                                                <img src={user?.photoURL} alt='' />
                                            </div>
                                        </div> : 
                                        <div class="avatar justify-center">
                                            <div class="w-36 rounded-full ">
                                                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"alt='' />
                                            </div>
                                        </div>
                                    } */}
                                    <h2 class="card-title font-bold py-2 text-3xl text-slate-700 justify-center">{user?.displayName}</h2>
                                    <p className='text-xl font-semibold'>Email: <span className='font-thin'>{user?.email}</span></p>
                                    {
                                        data?.phone && <p className='text-xl font-semibold'>Phone: <span className='font-thin'>{data.phone}</span></p>
                                    }
                                    {
                                        data?.education && <p className='text-xl font-semibold'>Education: <span className='font-thin'>{data.education}</span></p>
                                    }
                                    {
                                        data?.address && <p className='text-xl font-semibold'>Address: <span className='font-thin'>{data.address}</span></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <div class="card w-96 bg-slate-200 shadow-xl">
                            <div class="card-body">
                                <h1 className='text-3xl text-center py-3 font-bold text-slate-700'>Update Profile</h1>
                                <form onSubmit={handleUpdateProfile} className='w-full text-center'>
                                    <input name='education' type="text" placeholder="Education" class="input input-bordered w-full mb-3" />
                                    <input name='address' type="text" placeholder="Address" class="input input-bordered w-full mb-3" />
                                    <input name='photo' type="text" placeholder="Photo URL" class="input input-bordered  w-full mb-3" />
                                    <input name='phone' type="text" placeholder="Phone" class="input input-bordered w-full mb-3" />
                                    <input className='btn bg-cyan-500 border-0' type="submit" value="Update Profile" />
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;