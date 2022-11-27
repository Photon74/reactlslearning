import { useState } from "react"
import { Form as ClassForm } from "./components/classes/Form"
import { Form as FuncForm } from "./components/func/Form"

export function App(){
    const[toggle, setToggle] = useState(true)
    const[arr, setArr] = useState([{name: 'Dida'}, {name: 'Doda'}, {name: 'Duda'}, {name: 'Dada'}])

    return (
        <>
            <h1>Hello world!!!</h1>
            <ClassForm></ClassForm>
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
            {toggle && <FuncForm />}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

// export default App