import React from 'react';
import {Link} from 'react-router-dom';

function Navbar (){
    return <nav className="navBarHd"> 
        <h4><Link className='link' to='/'>HOME</Link></h4>
        <h4><Link className='link' to='/create'>Create Store </Link></h4>
        <h4><Link className='link' to='/counter'>Counter</Link></h4>
    </nav>

}
export default Navbar