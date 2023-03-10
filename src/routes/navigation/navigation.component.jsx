import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as SlLogo } from '../../assets/transp-SL-logo.svg'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utilities";
import './navigation.style.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
    // console.log(currentUser);
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <SlLogo className='logo' />
            </Link>
         
          <div className="nav-links-container">

            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  {' '}
                  SIGN OUT{' '}
                  </span>
                  ) : (
                  <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
              )
            }
            
            
          </div>
        </div>
        <Outlet />
        </Fragment>
    )
  };


  export default Navigation;