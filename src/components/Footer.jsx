import React from 'react';

function Footer(){
    let currentYear = new Date().getFullYear();
    return(
    <footer>
    <p>&#169; Copywright {currentYear}</p>
    </footer>
    )
}

export default Footer;