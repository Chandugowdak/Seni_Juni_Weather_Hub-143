import React from 'react';
import {Link} from 'react-router-dom';

const LinkerPage = ()=>{
    return(
        <div>
            <Link to='/login'></Link>
            <Link to='/register'></Link>
            <Link to="/hom" ></Link>
            <Link to="/Fet"></Link>
            <Link to="/Bio"></Link>
            <Link to='/Pollut'></Link>
            <Link to='/Private'></Link>
            <Link to='/Weather'></Link>
            <Link to='/Coorg'></Link>

        </div>
    )
}
export default LinkerPage;