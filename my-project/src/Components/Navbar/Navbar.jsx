import React from 'react'
import Logo from '../../assets/logo.png'
import { HiOutlineMenuAlt1, HiOutlineMenuAlt3 } from "react-icons/hi";

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "Pricing",
        link: "#",
    },
    {
        id: 4,
        name: "Contact Us",
        link: "#",
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    return (
        <div>
            <div className='container py-2 md:py-0'>
                <div className="flex justify-between items-center">
                    <div className='flex items-center gap-3'>
                        <img src={Logo} alt="" className='h-16' />
                        <p className='text-3xl'>VR <span className='font-bold'>World</span></p>
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id} className="py-4">
                                        <a
                                            href={link}
                                            className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    {/* Mobile view Sidebar */}
                    <div>
                       {showMenu ? (<HiOutlineMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30}/>) : (<HiOutlineMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30}/>)}     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar