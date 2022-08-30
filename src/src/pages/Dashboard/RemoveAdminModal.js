import React from 'react';
import { toast } from 'react-toastify';

const RemoveAdminModal = ({ removeAdmin, setRemoveAdmin, refetch }) => {
    const { email } = removeAdmin
    const handleRemoveAdmin = () => {
        fetch(`https://hidden-stream-11117.herokuapp.com/users/removeAdmin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Remove Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    setRemoveAdmin(null)
                    toast.success('Successfully Remove Admin')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="remove-admin-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to remove the user from Admin?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleRemoveAdmin}>Yes</button>
                        <label for="remove-admin-modal" class="btn px-6 btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveAdminModal;