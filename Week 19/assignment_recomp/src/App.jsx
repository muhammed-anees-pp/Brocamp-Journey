// import "./styles.css";
// import ProfileCard from "./components/ProfileCard.jsx";
// import data from "./data.js";

// export default function App() {
//   return (
//     <main className="App">
//       {data.map((user) => (
//         <ProfileCard
//           key={user.id}
//           name={user.name}
//           email={user.email}
//         />
//       ))}
//     </main>
//   );
// }
////////////////////////////////////////////////

////////////////////////////////////////////////

// import React,{useState} from "react";

// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => count < 1 ? 0 : setCount(count - 1)}>-</button>
//     </div>
//   )
// }

// export default Counter

////////////////////////////////////////////////

////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react'
// import ProfileCard from './components/ProfileCard'

// function App() {
//   const [count, setCount] = useState(1)
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         setLoading(true)
//         setError(null)

//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
//         if (!res.ok) throw new Error("Failed to fetch user")

//         const data = await res.json()
//         setUser(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchUser()
//   }, [count])

//   return (
//     <div className='App'>
//       <h1>{count}</h1>

//       {}
//       {user && <ProfileCard name={user.name} email={user.email} />}

//       {loading && <p>Loading new user...</p>}
//       {error && <p style={{color: "red"}}>{error}</p>}

//       <div>
//         <button onClick={() => setCount((c) => (c > 1 ? c - 1 : 1))}>-</button>
//         <button onClick={() => setCount((c) => c + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

// export default App
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
import React, { useState, useRef } from "react";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      inputRef.current.focus();
      return;
    }
    console.log("Submitted Name:", name);
    setName("");
    inputRef.current.focus();
  };

  return (
    <div className="app-container">
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          id="nameInput"
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
          placeholder="Type your name"
        />
        <button type="submit">Submit</button>
      </form>
      <UncontrolledForm />
    </div>
  );
}

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uncontrolled value:", inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <label htmlFor="uncontrolledInput">Uncontrolled input:</label>
      <input id="uncontrolledInput" type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
