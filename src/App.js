import { useState } from "react"
import { Form as ClassForm } from "./components/classes/Form"
import { Form as FuncForm } from "./components/func/Form"

import './App.css'

export function App(){
    const[toggle, setToggle] = useState(true)
    const[arr, setArr] = useState([{name: 'Dida'}, {name: 'Doda'}, {name: 'Duda'}, {name: 'Dada'}])

    return (
        <div className="App-header">
            <h1>Hello world!!!</h1>
            <ClassForm></ClassForm>
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
            {toggle && <FuncForm title='Function Component'/>}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

// export default App