import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import AuthLinks from './AuthLinks'

const Navbar = () => {
    return (
        <div className='headerWrap'>
            <div className="social">
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </div>
            <div className="logo">Next Blog</div>
            <div className="links">
                <ThemeToggle />
                <Link href="/" className='link'>Home</Link>
                <Link href="/ className='link'">Contact</Link>
                <Link href="/" className='link'>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar