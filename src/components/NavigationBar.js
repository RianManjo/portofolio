import React from 'react';

const NavigationBar = () => {
    return (    
        <div>            
            <nav className='navbar'>
                <div className='navbar-logo'><a href='/'>Manjo.Dev</a></div>
                <div className='navbar-menu'>
                    <p className='menu'><a href='/'>Home</a></p>
                    <p className='menu'> <a href='/'>About</a></p>
                    <p className='menu'> <a href='/'>Project</a></p>
                    <p className='menu'> <a href='/'>Blog</a></p>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar;