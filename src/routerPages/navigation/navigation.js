import { Fragment } from 'react';
import { Outlet ,Link } from 'react-router-dom';
import {ReactComponent as CrwLogo} from '../../assets/crown.svg'
import './navigation.scss';

const Navigation =()=>{

    return(
        <Fragment>
            <div className="navBar">
                <CrwLogo className='navBar__logo'/>
                <div className="navBar__menu">
                    <Link className='navBar__menu__txt' to='/'>SHOP</Link>
                    <Link className='navBar__menu__txt' to='/Contuct'>CONTACTS</Link>
                    <Link className='navBar__menu__txt' to='/Sign-In'>SIGN IN</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;