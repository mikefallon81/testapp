import React from 'react';
import Logo from '../images/CompanyLogo.png';

class Header extends React.Component {
    
    render(){
        return <div className="Logo"><img src={Logo} alt="Paul Fallon Plumbing Logo"></img></div>
    }
}
export default Header;