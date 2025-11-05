import React, { Component } from 'react';
import Logo from '../assets/holberton-logo.jpg';
import Context from '../Context/context';

class Header extends Component {
  static contextType = Context;

  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <div className='App-header flex items-center flex-row max-[912px]:flex-col'>
          <img src={Logo} alt='holberton logo' className='w-60 max-[912px]:w-45'/>
          <h1 className='font-bold text-[45px] text-(--main-color) max-[912px]:mb-8 max-[912px]:text-[37px]'>
            School Dashboard
          </h1>
        </div>
        {user && user.isLoggedIn && (
          <section id='logoutSection'>
            Welcome {user.email}{' '}
            (<a href='#' onClick={(e) => {e.preventDefault(); logOut();}}>logout</a>)
          </section>
        )}
      </>
    );
  }
}

export default Header;
