import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from '../../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase"

const Header = () => {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            signOut(auth);
        }
    }

    return (
        <div>
            <nav className='header'>
                {/* logo */}
                <Link to="/">
                    <img
                        className='header__logo'
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </Link>

                {/* search box */}
                <div className='header__search'>
                    <input type="text" className='header__searchInput' />
                    <SearchOutlinedIcon className="header__searchIcon" />
                </div>

                {/* links */}
                <div className='header__nav'>
                    {/* first link */}
                    <Link to={!user && "/login"} className='header__link'>
                        <div onClick={login} className='header__option'>
                            <span className='header__optionLine1'>Hello {user?.email}</span>
                            <span className='header__optionLine2'>{user ? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>

                    {/* second link */}
                    <Link to="/" className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLine1'> Returns</span>
                            <span className='header__optionLine2'>& Orders</span>
                        </div>
                    </Link>

                    {/* third link */}
                    <Link to="/" className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLine1'>Your</span>
                            <span className='header__optionLine2'>Prime</span>
                        </div>
                    </Link>

                    {/* basket icon with number */}
                    <Link to="/checkout" className='header__link'>
                        <div className='header__optionBasket'>
                            {/* icon */}
                            <ShoppingCartOutlinedIcon />
                            {/* number of items */}
                            <span className='header__optionLine2 header__basketCount'>{basket?.length}</span>
                        </div>
                    </Link>


                </div>



            </nav>
        </div>
    )
}

export default Header
