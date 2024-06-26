import React,{useEffect} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
const NavBar = () => {
    const navigate=useNavigate()
    let location = useLocation();
    useEffect(()=>{
        // console.log(location.pathname)
    },[location])
    const handleLogout = ()=>{
        localStorage.removeItem('authtoken')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/'?"active": ""}`}  aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about'?"active": ""}`} to="/about">About</Link>
                        </li>
                    </ul>
{                    localStorage.getItem('authtoken')===null?<form className="d-flex">
                            <Link to='/login' className="btn btn-light mx-2" role= "button">Login</Link>
                            <Link to='/signup' className="btn btn-light" role= "button">Signup</Link>
                    </form> : <Link  to='/login' onClick={handleLogout} className ='btn btn-light'> Logout</Link>}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
