import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchUsers from './tableActions'

function UserTable() {
    const {data, loading, error} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

    },[dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
  return (
    <div>
        <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable