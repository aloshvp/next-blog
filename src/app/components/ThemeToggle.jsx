"use client";
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

    const { theme, toggle } = useContext(ThemeContext)


    return (
        <div
            className='themeBtnWrap'
            onClick={toggle}
            style={
                theme === "dark" ?
                    { backgroundColor: "#fff" } :
                    { backgroundColor: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div className="ball"
                style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "#fff" }}>
            </div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle