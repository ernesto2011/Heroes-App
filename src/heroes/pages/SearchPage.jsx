import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { useLocation } from "react-router-dom";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {searchText, onInputChange} = useForm({
    searchText: ''
  })
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }
  return (
    <>
    <h1>Search</h1>
    <hr />
    <div className="row">
    <div className="col-5">
      <h4>Searching</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input 
        name="searchText" 
        type="text" 
        className="form-control" 
        placeholder="Search a hero" 
        autoComplete="off"
        value={searchText}
        onChange={onInputChange}
        />
        <button className="btn btn-outline-primary mt-3">
          Search
        </button>
      </form>

    </div>
    <div className="col-7">
      <h4>Results</h4>
      <hr />
      <div className="alert alert-primary"> Search a Hero</div>
      <div className="alert alert-danger"> No Hero with <b>ADCD</b></div>
      {/* <HeroCard/> */}

    </div>
    </div>
    </>
  )
}
