import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <React.Fragment>
            <footer className="foot bg-orange-400 text-center lg:text-left">
                <div className="text-white text-center p-4">
                    ©  Copyright 2022 &nbsp;
                    <a className="text-gray-800" href="https://tailwind-elements.com/">YPW</a>
                </div>
            </footer>
        </React.Fragment>        
    );
}

export default Footer