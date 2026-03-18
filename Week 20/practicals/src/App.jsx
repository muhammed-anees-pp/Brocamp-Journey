import React, { useEffect, useState } from 'react'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
    .then(res => res.json())
    .then((data) => {
      setQuotes(data.quotes)
    })
  },[])



  return (
    <div>
      <h2>Quotes</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.quote}</td>
              <td>{q.author}</td>

            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default App