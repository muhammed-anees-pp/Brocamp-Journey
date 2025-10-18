import { useCallback, useMemo, useState } from "react";

const names = ["John", "Jane", "Alice", "Bob", "Mike"];

function App() {
    const [query, setQuery] = useState("")
    const filtered = useMemo(() => (names.filter(n => n.toLocaleLowerCase().includes(query.toLocaleLowerCase()))),[query])
    const handle = useCallback((e) => setQuery(e.target.value),[])

    return (
        <div>
            <input type="text" value={query} onChange={handle}/>
            <ul>{filtered.map(n => <li key={n}>{n}</li>)}</ul>

        </div>
    )
}

export default App