import Link from 'next/link';
import React from 'react'

const AuthLinks = () => {

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
        </div>
    )
}

export default AuthLinks