"use client";
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

    const { theme } = useContext(ThemeContext)
    console.log(theme);

    return (
        <div className='themeBtnWrap'>
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div className="ball"></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle