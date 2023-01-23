import React,{ useState } from 'react';
import Axios from 'axios';

export default function SearchForm() {
    
    const[searchCriteria, setSearchCriteria] = useState({
        classes: "",
        searchName: "",
        eye: "",
        ear: "",
        back: "",
        mouth: "",
        horn: "",
        tail: "",
        breedCount: "",
        maxPrice: ""
    });
    
    // handleChange = (e, index,) => {
    //     let array = this.state.car.features.slice() // create mutable copy of the array
    //     array[index] = e.target.value // set the value of the feature at the index in question to e.target.value
    //     const newObj = { ...this.state.car, features: array } // create a new object by spreading in the this.state.car and overriding features with our new array 
    //     this.setState({ car: newObj }) // set this.state.car to our new object
    //   }

    // ES6: Computed properties allows you to surround key with []. Turns dynamic String to a property name for an object.

    function handleChange(event) {
        setSearchCriteria(prevSearchCriteria => {
            return {
                ...prevSearchCriteria,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            Axios({
                method: 'post',
                url: 'http://localhost:3000/api/searches',
                data: {
                  searchCriteria
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <h2>Create New Search</h2>

            <label htmlFor="classes">Class:</label>
            <br />
            <select
                value={searchCriteria.classes}
                onChange={handleChange}
                name="classes"
                id="classes"
            >
                <option value="Aquatic">Aquatic</option>
                <option value="Beast">Beast</option>
                <option value="Bird">Bird</option>
                <option value="Bug">Bug</option>
                <option value="Dawn">Dawn</option>
                <option value="Dusk">Dusk</option>
                <option value="Plant">Plant</option>
                <option value="Reptile">Reptile</option>
                <option value="Mech">Mech</option>
            </select>

            <br />
                        
            <input
                type="text"   
                onChange={handleChange}
                placeholder="Search Name"
                name="searchName"
                value={searchCriteria.searchName}
            />

            <br />
 
            <input
                type="text"
                onChange={handleChange}
                placeholder="Eye"
                name="eye"
                value={searchCriteria.eye}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Ear"
                name="ear"
                value={searchCriteria.ear}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Back"
                name="back"
                value={searchCriteria.back}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Mouth"
                name="mouth"
                value={searchCriteria.mouth}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Horn"
                name="horn"
                value={searchCriteria.horn}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Tail"
                name="tail"
                value={searchCriteria.tail}
            />

            <br />

            <input
                type="text"
                onChange={handleChange}
                placeholder="Max Price in ETH"
                name="maxPrice"
                value={searchCriteria.maxPrice}
            />

            <br />

            <button>Create</button>
        </form>
    )
}