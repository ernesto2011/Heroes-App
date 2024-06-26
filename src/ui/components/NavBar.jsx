import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth';

export const NavBar = () => {
const {user, logOut} = useContext(AuthContext)
console.log(user);
const navigate = useNavigate();
const onLogOut = () => {
    logOut()
    navigate('/login',{
        replace: true
    });
}
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>
                    <button
                    onClick={onLogOut}
                    className='nav-item nav-link btn'>
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}