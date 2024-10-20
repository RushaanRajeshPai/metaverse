import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='container py-2 md:py-0'>
            <div className="flex">
                <div>
                    <img src={Logo} alt="" className='h-16'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar