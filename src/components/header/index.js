import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header" >
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
      alt="Zomato-logo" 
      className="header-logo" />

      <div className='header-right'>
        <div className='header-location-search-container'>
           <div className='location-wrapper'>
              <div className='location-icon-name'>

              <i className="fi fi-rr-marker absolute-center location-icon"></i>  
              <div>Bangalore</div> 
              </div>
              <i className="fi fi-rr-caret-down absolute-center"></i>
           </div>

           <div className="location-search-separator">
           </div>

           <div className="header-searchBar">
           <i className="fi fi-rr-search absolute-center search-icon"></i>

           <input placeholder='search for restaurant, cusine or a dish'
            className="search-input" />
           </div>
        </div>

        <div className='profile-wrapper'>
                <img src="https://b.zmtcdn.com/data/user_profile_pictures/64f/faee274cfc79b90e9a5d0a1c3d65764f.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" 
                alt="Profile" 
                className='header-profile-image'
                />
                <span className='header-username'>Uttam</span>
                <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>




        </div>
      </div>
    </div>
  );
};

export default Header;
