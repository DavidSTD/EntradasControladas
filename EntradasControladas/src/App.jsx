import { useState } from "react"

function App({ onSubmit }){
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleClick = () => {
        onSubmit(term)
    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
              <label>Escriba aquí:</label><br></br>
                <input onChange={handleChange} value={term} />
            </form> 
            <h3>Se imprime su texto abajo:</h3>
            <p>{term}</p>
        </div>
    )
}

export default App
