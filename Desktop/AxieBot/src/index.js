import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import SearchForm from "./components/SearchForm"
import Axios from "axios"

function App() {
    const [axies, setAxies] = useState([])

    return ( 
        <div>
            <SearchForm />
        </div>
    )
}

const root = createRoot(document.querySelector('#app'));
root.render(<App />);