import React from 'react'
import hero from '../../assets/hero.png'
import { BiPlayCircle } from 'react-icons/bi'

const Hero = () => {
    return (
        <div>
            <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
                <div className="container min-h-[700px] flex-row">
                    <div className="grid grid-cols-2 gap-6 place-items-center relative z-10">
                        <div className="space-y-4 lg:py-20">
                            <h1 className='text-3xl font-semibold'>GET READY TO ENJOY VR <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>GAMES WITH OUR PLATFORM</span>
                            </h1>
                            <p className='text-1xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum quis iure eaque adipisci eos incidunt ea, ipsa temporibus sapiente aliquid porro aut fugiat laboriosam perspiciatis vero tempora nihil consequuntur.
                            </p>
                            <div className='flex gap-6'>
                                <button className='text-white bg-gradient-to-r from-primary to-secondary text-sm p-2 rounded-full'>Get Started</button>
                                <button className='place-items-center flex gap-1'><BiPlayCircle />See Demo</button>
                            </div>
                        </div>
                        <div>
                            <img src={hero} alt="VR experience" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero