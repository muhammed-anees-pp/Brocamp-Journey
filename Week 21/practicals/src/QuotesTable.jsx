import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchQuotes from './fetchQuotes'

function QuotesTable() {
    const {data, loading, error} = useSelector((state) => state.quotes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuotes())
    },[dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

  return (
    <div>
        <h1>Quotes</h1>
        <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Quote</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {data.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.quote}</td>
                        <td>{u.author}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default QuotesTable