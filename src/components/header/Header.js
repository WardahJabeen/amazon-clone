import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                {/* logo */}
                <Link to="/">
                    <img
                        className='logo'
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </Link>

                {/* search box */}
                <div className='search'>
                    <input type="text" className='searchInput' />
                    <SearchOutlinedIcon className="searchIcon" />
                </div>

                {/* links */}
                <div className='nav'>
                    {/* first link */}
                    <Link to="/login" className='link'>
                        <div className='option'>
                            <span className='optionLine1'>Hello Wardah</span>
                            <span className='optionLine2'>Sign In</span>
                        </div>
                    </Link>

                    {/* second link */}
                    <Link to="/" className='link'>
                        <div className='option'>
                            <span className='optionLine1'> Returns</span>
                            <span className='optionLine2'>& Orders</span>
                        </div>
                    </Link>

                    {/* third link */}
                    <Link to="/" className='link'>
                        <div className='option'>
                            <span className='optionLine1'>Your</span>
                            <span className='optionLine2'>Prime</span>
                        </div>
                    </Link>

                    {/* basket icon with number */}
                    <Link to="/checkout" className='link'>
                        <div className='optionBasket'>
                            {/* icon */}
                            <ShoppingCartOutlinedIcon />
                            {/* number of items */}
                            <span className='optionLine2 basketCount'>0</span>
                        </div>
                    </Link>


                </div>



            </nav>
        </div>
    )
}

export default Header
