import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse( location.search )
  const heroes = getHeroesByName(q);
  
  const {searchText, onInputChange} = useForm({
    searchText: q
  })
  const handleSubmit =(e)=>{
    e.preventDefault()
    //if(searchText.trim().length <= 1) return;
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
      {
        (q === '')
        ? <div className="alert alert-primary"> Search a Hero</div>
        : (heroes.length === 0)
        && <div className="alert alert-danger"> No Hero with <b>{q}</b></div>

      }
      {
        heroes?.map(hero =>(
          <HeroCard key={hero.id} {...hero}/>
        ))
      }

    </div>
    </div>
    </>
  )
}
