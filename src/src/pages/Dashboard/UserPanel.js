import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteUserModal from './DeleteUserModal';
import MakeAdminModal from './MakeAdminModal';
import RemoveAdminModal from './RemoveAdminModal';
import UsersRow from './UsersRow';

const UserPanel = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [makeAdmin, setMakeAdmin] = useState(null)
    const [removeAdmin, setRemoveAdmin] = useState(null)

    const { isLoading, data: users, refetch } = useQuery(['users'], () => fetch('https://hidden-stream-11117.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='pb-10 '>
            <h1 className='text-3xl text-slate-200 font-bold text-center p-10'>Make an Admin</h1>
            <div>
                <div className="overflow-x-auto flex items-center m-2 justify-center">
                    <table className="table text-white border-white w-6/12">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Remove User/Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UsersRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    setDeleteConfirm={setDeleteConfirm}
                                    setMakeAdmin={setMakeAdmin}
                                    setRemoveAdmin={setRemoveAdmin}
                                    refetch={refetch}
                                ></UsersRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteConfirm && <DeleteUserModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteUserModal>
            }
            {
                makeAdmin && <MakeAdminModal
                    makeAdmin={makeAdmin}
                    setMakeAdmin={setMakeAdmin}
                    refetch={refetch}
                ></MakeAdminModal>
            }
            {
                removeAdmin && <RemoveAdminModal
                    removeAdmin={removeAdmin}
                    setRemoveAdmin={setRemoveAdmin}
                    refetch={refetch}
                ></RemoveAdminModal>
            }
        </div>
    );
};

export default UserPanel;