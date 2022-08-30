import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminModal = ({ makeAdmin, setMakeAdmin, refetch }) => {
    const { email } = makeAdmin
    const handleMakeAdmin = () => {
        fetch(`https://hidden-stream-11117.herokuapp.com/users/setAdmin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    setMakeAdmin(null)
                    toast.success('Successfully made Admin')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="make-admin-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to make the user to Admin?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleMakeAdmin}>Yes</button>
                        <label for="make-admin-modal" class="btn px-6 btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminModal;