import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button onClick={() => onRouteChange('signin')} className='f4 pa3 link pointer'>Sign In</button>
          <button onClick={() => onRouteChange('register')} className='f4 link pa3 pointer'>Register</button>
        </nav>
      );
    }
}

export default Navigation;