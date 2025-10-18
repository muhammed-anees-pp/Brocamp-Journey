// 1. Build a counter with Increment & Decrement buttons. (Use useCallback) 

// import { useState } from "react"

// import React, { useCallback, useState } from "react"

// function Counter() {
//     const [count, setCount] = useState(0)

//     const increment = useCallback(() => setCount(c => c + 1),[])
//     const decrement = useCallback(() => setCount(c => c < 1 ? 0 : c - 1),[]) 

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// export default Counter
/////////////////////////////////////////////

// 2. Calculate factorial of a number. (Use useMemo)
// import { useState, useMemo } from "react";

// export default function Factorial() {
//   const [num, setNum] = useState(1);

//   const fact = useMemo(() => {
//     let res = 1;
//     for (let i = 1; i <= num; i++) res *= i;
//     return res;
//   }, [num]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={num}
//         onChange={e => setNum(Number(e.target.value))}
//       />
//       <p>Factorial: {fact}</p>
//     </div>
//   );
// }
///////////////////////////////////////////////

// 3. Make a parent with a counter & a child that shows the current date. 
// import { useState } from "react";
// import React from "react";

// const Child = React.memo(( { date }) => {
//     console.log("Child")
//     return <p>Date: {date}</p>
// })


// function Parent() {
//     const [count,setCount] = useState(0)
//     console.log("Parent")
//     const today = new Date().toDateString()
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(c => c + 1)}>Click</button>
//             <Child date={today}/>
//         </div>
//     )
// }

// export default Parent

// 4. Create a Theme context with “light/dark” and toggle it in a button.
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export default function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   const { theme, setTheme } = useContext(ThemeContext);
//   return (
//     <div style={{ background: theme === "light" ? "#eee" : "#333", padding: 20 }}>
//       <p>Theme is {theme}</p>
//       <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// 5. Use useReducer to manage a counter state with increment, decrement, and reset.

// import { useReducer } from "react";

// function reducer(state, action) {
//     switch(action.type) {
//         case "inc":
//             return state + 1
//         case "dec":
//             return state < 1 ? 0 : state - 1
//         case "reset":
//             return 0
//         default:
//             return state
//     }
// }

// function Counter() {
//     const [count, dispatch] = useReducer(reducer,0)
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => dispatch({type: "inc"})}>Increase</button>
//             <button onClick={() => dispatch({type: "dec"})}>Decrease</button>
//             <button onClick={() => dispatch({type: "reset"})}>Reset</button>
//         </div>
//     )
// }

// export default Counter

// 6. Build a React component using useReducer that manages both a counter and a text colour.

// import React, { useReducer } from "react"

// const intial = {
//     count: 0,
//     color: "blue",
// }

// function reducer(state,action) {
//     switch (action.type) {
//         case "inc":
//             return {...state, count: state.count + 1}
//         case "dec":
//             return {...state, count: Math.max(0, state.count - 1)}
//         case "reset":
//             return intial
//         case "change color":
//             return {...state, color: action.color}
//     }
// }


// function Counter() {
//     const [state, dispatch] = useReducer(reducer,intial)

//     return (
//         <div style={{
//             background: state.color,
//         }}>
//             <h2>Counter: {state.count}</h2>
//             <button onClick={() => dispatch({ type: "inc"})}>Increase</button>
//             <button onClick={() => dispatch({ type: "dec" })}>Decrease</button>
//             <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
//             <button onClick={() => dispatch({ type: "change color", color: "blue" })}>Blue</button>
//             <button onClick={() => dispatch({ type: "change color", color: "red"})}>Red</button>
//             <button onClick={() => dispatch({ type: "change color", color: "yellow"})}>Yellow</button>
//         </div>
//     )
// }

// export default Counter

// 7. Create a React component using useReducer to manage a counter whose text changes colour based on the value

// import { useReducer } from "react"


// function reducer (state,action) {
//     switch (action.type) {
//         case "inc": {
//             const newCount = state.count + 1
//             return {count: newCount, color: getColor(newCount)}
//         }
//         case "dec": {
//             const newCount = state.count < 1 ? 0 : state.count - 1
//             return {count: newCount, color: getColor(newCount)}
//         }
//         case "reset":
//             return intial
//     }
// }

// function getColor(count) {
//     if (count === 0) return "yellow"
//     return count % 2 === 0 ? "blue" : "red"
// }

// const intial = {
//     count: 0,
//     color: "yellow"
// }

// function Counter() {
//     const [state, dispatch] = useReducer(reducer, intial)
//     return (
//         <div>
//             <h2 style={{color: state.color}}>{state.count}</h2>
//             <button onClick={() => dispatch({type: "inc"})}>Increase</button>
//             <button onClick={() => dispatch({type: "dec"})}>Decrease</button>
//             <button onClick={() => dispatch({type: "reset"})}>Reset</button>
//         </div>
//     )
// }

// export default Counter

// 8. Global counter state using Context + Reducer

// import { createContext, useContext, useReducer } from "react"

// const CounterContext = createContext()

// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return state + 1
//     case "dec":
//       return state - 1
//     default:
//       return state
//   }
// }

// export default function App() {
//   const [count, dispatch] = useReducer(reducer, 0)

//   return (
//     <CounterContext.Provider value={{ count, dispatch }}>
//       <Counter />
//     </CounterContext.Provider>
//   )
// }

// function Counter() {
//   const { count, dispatch } = useContext(CounterContext)
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => dispatch({ type: "inc" })}>+</button>
//       <button onClick={() => dispatch({ type: "dec" })}>-</button>
//     </div>
//   )
// }

// 9. Lazy-load a component when needed

// import { lazy, Suspense, useState } from "react"

// const About = lazy(() => import('./About'))

// function App() {
//     const [show, setShow] = useState(false)
//     return (
//         <div>
//             <button onClick={() => setShow(true)}>Show About</button>
//             <Suspense fallback={<p>Loading....</p>}>
//                 {show && <About/>}
//             </Suspense>

//         </div>
//     )
// }

// export default App

// 10. Filter a list of names using useMemo, and memoize the handler with useCallback

// import { useState, useMemo, useCallback } from "react";

// const names = ["John", "Jane", "Alice", "Bob", "Mike"];

// export default function SearchNames() {
//   const [query, setQuery] = useState("");

//   const filtered = useMemo(
//     () => names.filter(n => n.toLowerCase().includes(query.toLowerCase())),
//     [query]
//   );

//   const handleChange = useCallback(e => setQuery(e.target.value), []);

//   return (
//     <div>
//       <input value={query} onChange={handleChange} />
//       <ul>{filtered.map(n => <li key={n}>{n}</li>)}</ul>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react"

export default function ResponsiveDiv() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      style={{
        background: "white",
        height: 100,
        width: width < 600 ? "100%" : "400px",
        margin: "20px auto",
      }}
    />
  )
}


