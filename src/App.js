import { Form as ClassForm } from "./components/classes/Form"
import { Form as FuncForm } from "./components/func/Form"

export function App(){
    return (
        <>
            <h1>Hello world!!!</h1>
            <ClassForm></ClassForm>
            <hr />
            <FuncForm></FuncForm>
        </>
    )
}

// export default App