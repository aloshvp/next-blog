"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const AuthLinks = () => {

    const [open, setOpen] = useState(false);
    const status = "notauthenticated";

    return (
        <div>
            {status === "notauthenticated" ?
                <Link href="">Login</Link>
                :
                (
                    <>
                        <Link href="">Logout</Link>
                        {/* <span>Logout</span> */}
                    </>
                )

            }
            <div className="burger" onClick={setOpen(!open)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {open && (
                <div className='responsiveMenu'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>

                    {status === "notauthenticated" ?
                        <Link href="">Login</Link>
                        :
                        (
                            <>
                                <Link href="">Logout</Link>
                                {/* <span>Logout</span> */}
                            </>
                        )
                    }
                </div>

            )
            }
        </div>
    )
}

export default AuthLinks