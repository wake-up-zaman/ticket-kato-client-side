import React from 'react';

const UsersRow = ({ user, index, setDeleteConfirm, setMakeAdmin, setRemoveAdmin }) => {
    const { email, role } = user

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
          <td>
                {role === 'admin' ? <h1 className=" text-white mr-4">ALREADY ADMIN</h1> : <label onClick={() => setMakeAdmin(user)} for="make-admin-modal" className="btn bg-cyan-500 btn-sm">Make Admin</label>}
            </td>
             
            <td>
                {role === 'admin' ?
                    <label onClick={() => setRemoveAdmin(user)} for="remove-admin-modal" className="btn bg-red-500 border-0 btn-sm">Remove Admin</label>
                    : <label onClick={() => setDeleteConfirm(user)} for="delete-user-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Remove User</label>
                }
            </td>
        </tr>

    );
};

export default UsersRow;