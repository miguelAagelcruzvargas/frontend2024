import PropTypes from "prop-types"

const Search=({values,handleInputChange,reset, cities, setCities})=> {
    const handleSearch = () => {
        const newCities = [...cities, values.searchCity]
        setCities(newCities)
        setCities(newCities)
        reset()
    }

    return(
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="searchCity">City</label>
            <input 
            className="form-control" 
            name="searchCity" 
            id="searchCity"
            onChange={handleInputChange}
            type="text" 
            value={values.searchCity}>
            </input>
            <button onClick={handleSearch} className="btn btn-primary">Search</button>
        </div>
    )
}

Search.propTypes = {
    values: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    setCities: PropTypes.func.isRequired
}
export default Search