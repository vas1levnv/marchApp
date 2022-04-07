import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/login' className = { navData => navData.isActive ? s.active : s.item }>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar