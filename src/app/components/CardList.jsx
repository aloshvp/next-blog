import React from 'react'
import Pagination from './Pagination'
import Image from 'next/image'

const CardList = () => {
    return (
        <div className='cardListWrap'>
            <h1>Recent Blogs</h1>
            <div className="cardListPosts">
                <div className="cardListPost">
                    <div className="imageContainer">
                        <Image src="/p1.jpeg" alt="" width={600} height={500} className='image' />
                    </div>
                    <div className="textContainer">

                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default CardList