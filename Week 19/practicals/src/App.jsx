//Create a component that renders Hello React! using JSX
// import React from "react";

// import { useState } from "react"

// import Card from "./components/Card"

// import { useState } from "react"

// function App() {
//   return <h1>Hello React!!</h1>
// }

// export default App
/////////////////////////////////////////////////

//Add a button that toggles between “Good Morning” and “Good Night”
// import { useState } from "react"

// function App() {
//   const [greet, setGreet] = useState("Good Morning")

//   return (
//     <div>
//       <h1>{greet}</h1>
//       <button onClick={() => setGreet(greet === "Good Morning" ? "Good Night" : "Good Morning")}>Toggle Greet</button>
//     </div>
//   )
// }

// export default App
//////////////////////////////////////////////////

//Make a simple counter with Increment and Decrement buttons.
// import { useState } from "react";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//     <h2>{count}</h2>
//     <button onClick={() => {setCount(count + 1)}}>Increment</button>
//     <button onClick={() => (count < 1 ? 0 : setCount(count - 1))}>Decrement</button>
//   </div>
//   )
// }

// export default App
////////////////////////////////////////////////////

// Display a list of fruits dynamically.
// import React from "react";

// function App() {
//   const fruits = ["Apple", "Banana", "Carrot", "Mango"]
//   return (
//     <ul>
//       {fruits.map((fruit,index) => (
//       <li key={index}>{fruit}</li>
//     ))}
//     </ul>
//   )
// }

// export default App
////////////////////////////////////////////////////

//Show only students that start with letter A
// import React from "react";

// function App() {

//   const students = ["Ajmal", "Anees", "Jobish", "Navendu", "Ashmil", "Sajid"]

//   return (
//     <ul>
//       {students.filter(student => student.startsWith("A")).map((student,index) => (
//         <li key={index}>{student}</li>
//       ))}
//     </ul>
//   )
// }

// export default App
////////////////////////////////////////////////////

//Create an input box that updates and shows typed text
// import { useState } from "react"

// function App() {
//   const [text, setText] = useState("")
  
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)}/>
//       <h3>You typed: {text}</h3>
//     </div>
    
//   )
// }

// export default App
///////////////////////////////////////////////////

//Show a message in the console whenever count changes
// import { useEffect, useRef, useState } from "react"

// function App() {
//   const [count,setCount] = useState(0)
//   const isFirstRender = useRef(true)

//   useEffect(() => {
//     if(isFirstRender.current) {
//       isFirstRender.current = false
//       return
//     }

//     console.log(`Count changed: ${count}`)
//   },[count])

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App
/////////////////////////////////////////////////////

//Focus the input box when clicking a button
// import { useRef } from "react"

// function Focus() {
//   const inputRef = useRef()
//   const buttonRef = useRef()

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="type something"/>
//       <button ref={buttonRef} onClick={() => inputRef.current.focus()}>Focus</button>
//       <button onClick={() => buttonRef.current.focus()}>Out of Focus</button>
//     </div>
//   )

// }

// export default Focus
/////////////////////////////////////////////////////

//Create a Button component and use it multiple times
// import React from "react";
// import Button from "./components/Button";
// function App() {
//   const handleFirst = () => alert("First Button")
//   const handleSecond = () => alert("Second Button")

//   return (
//     <div>
//       <Button label={"First"} onClick={handleFirst} />
//       <Button label={"Second"} onClick={handleSecond} />
//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////

//Counter using reusable component
// import { useState } from "react"
// import Button from "./components/ButtonS"

// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button label={"Increment"} onClick={() => setCount(count + 1)} />
//       <Button label={"Decrement"} onClick={() => count < 1 ? 0 : setCount(count - 1)} />
//     </div>
//   )
// }

// export default Counter
/////////////////////////////////////////////////////

//Navigate between Home and About pages
// import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom"


// function Home() {
//     return <h1>Home Page</h1>
// }

// function About() {
//     return <h1>About Page</h1>
// }

// function App() {
//     return (
//         <Router>
//             <nav>
//                 <Link to={"/"}>Home</Link> {"| "}
//                 <Link to={"/about"}>About</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/about" element={<About/>}/>
//             </Routes>
//         </Router>
//     )
// }

// export default App
///////////////////////////////////////////////////

//Show/Hide text when a button is clicked
// import { useState } from "react"

// function App() {
//     const [visible,setVisible] = useState(true)

//     return (
//         <div>
//             <button onClick={() => setVisible(!visible)}>
//                 {visible ? "Hide" : "Show"} Text
//             </button>
//             {visible && <p>Hello, I am visible</p>}
//         </div>
//     )
// }

// export default App
//////////////////////////////////////////////////////

//Click a button to change the background color
// import { useState } from "react"

// function App() {
//     const colors = ["red","blue","White","yellow"]
//     const [index, setIndex] = useState(0)

//     return (
//         <div style={{backgroundColor: colors[index], height: "100vh", width: "100vw"}}>
//             <button onClick={() => setIndex((prvInd) => (prvInd + 1) % colors.length)}>Click Here</button>
//         </div>
//     )
// }

// export default App
///////////////////////////////////////////////////////

//Click a button to change the background color randomly
// import { useState } from "react"

// function App() {
//     const [color,setColor] = useState("white")
//     const colors = ["red","green","yellow","blue"]

//     return (
//         <div style={{backgroundColor: color, height:"100vh", width:"100vw"}}>
//             <button onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}>Click Here</button>
//         </div>
//     )
// }

// export default App
////////////////////////////////////////////////////

//Simple Todo App (Add items to a list dynamically)
// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task.trim()) {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   return (
//     <div>
//       <input value={task} onChange={(e) => setTask(e.target.value)} />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((t, i) => (
//           <li key={i}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
///////////////////////////////////////////////////////

//Show how many characters are typed in an input box
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <p>Characters: {text.length}</p>
//     </div>
//   );
// }

// export default App;
///////////////////////////////////////////////////////

//If age is above 18, show “Adult”, else “Minor”.
// import { useState } from "react"

// function App() {
//     const [age, setAge] = useState("")
    
//     return (
//         <div>
//             <input type="text" value={age} onChange={(e) => setAge(Number(e.target.value))} />
//             {age === "" ? null : (<p>This person is {age > 18 ? "Major" : "Minor"}</p>)}
//         </div>
//     )
// }

// export default App

//Create a Card component that accepts title and description as props
// function App() {

//     return (
//         <div>
//             <Card title={"Anees"} description={"He is a good guy"}/>
//             <Card title={"Amruth"} description={"Good boy"}/>
//             <Card title={"Jobish"} description={"Hard working"}/>
//         </div>
//     )

// }

// export default App
//////////////////////////////////////////////////////////

//Display a timer that counts seconds after the component loads
// import { useState, useEffect } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => setSeconds(s => s + 1), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return <h1>Time: {seconds}s</h1>;
// }

// export default App;
///////////////////////////////////////////////////////////

//Track button clicks using useRef (value won’t reset on re-render)
// import { useRef } from "react";

// function App() {
//   const clickCount = useRef(0);

//   const handleClick = () => {
//     clickCount.current += 1;
//     alert(`Clicked ${clickCount.current} times`);
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// }

// export default App;
//////////////////////////////////////////////////////////

//Calculate the total price of products using reduce()
// function App() {
//   const products = [
//     { name: "Apple", price: 50 },
//     { name: "Banana", price: 20 },
//     { name: "Mango", price: 30 }
//   ];

//   const total = products.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div>
//       <h2>Total Price: {total}</h2>
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////

//Show a message when component mounts & unmounts
// import React from "react";

// class App extends React.Component {
//   componentDidMount() {
//     console.log("Component Mounted");
//   }

//   componentWillUnmount() {
//     console.log("Component Unmounted");
//   }

//   render() {
//     return <h1>Hello from Class Component</h1>;
//   }
// }

// export default App;
/////////////////////////////////////////////////////////

//Fetch all users and show their names in a list
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(setUsers);
//   }, []);

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;
///////////////////////////////////////////////////////

//Display Loading… until data arrives
// import { useEffect, useState } from "react";

// function App() {
//   const [emails, setEmails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => {
//         setEmails(data.map(user => user.email));
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <ul>
//       {emails.map((email, i) => (
//         <li key={i}>{email}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;
///////////////////////////////////////////////////////

//Create an input box; filter users by name as you type
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(setUsers);
//   }, []);

//   const filtered = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         placeholder="Search by name"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />
//       <ul>
//         {filtered.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////

//Enter an ID and fetch that user’s details
// import { useEffect, useState } from "react";

// function App() {
//     const [id, setId] = useState(1)
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         if (!id) return
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(res => res.json())
//         .then(setUser)
//         .catch((err) => console.error(err))
//     }, [id])

//     return (
//         <div>
//             <input value={id} type="number" min={1} max={10} onChange={(e) => setId(Number(e.target.value))} />
//             {user && (
//                 <div>
//                     <h3>{user.name}</h3>
//                     <p>Email: {user.email}</p>
//                     <p>City: {user.address.city}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default App
//////////////////////////////////////////////////////////

//Fetch users and list their company names
// import { useEffect, useState } from "react";

// function App() {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setCompanies(data.map(user => user.company.name)));
//   }, []);

//   return (
//     <div>
//       <h2>Companies</h2>
//       <ul>
//         {companies.map((company, i) => (
//           <li key={i}>{company}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
////////////////////////////////////////////////////////

//Input two numbers and give the output
// import { useState } from "react"

// function App() {
//     const [num1, setNum1] = useState("")
//     const [num2, setNum2] = useState("")
//     const [showSum, setShowSum] = useState(false)
//     const sum = Number(num1) + Number(num2)

//     return (
//         <div>
//             <label htmlFor="num1">Number 1</label>
//             <input id="num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
//             <label htmlFor="num2">Number 2</label>
//             <input id="num2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
//             <button onClick={() => { if (num1 !== "" && num2 !== "") {setShowSum(true)}}}>Sum</button>
//             {showSum && <h1>{sum}</h1>}
//         </div>
//     )
// }

// export default App
/////////////////////////////////////////////////////////










