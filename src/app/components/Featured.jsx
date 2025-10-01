import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <div className='featuredWrap'>
            <h1 className='title'><b>Lorem ipsum,</b> dolor sit amet consectetur adipisicing elit. </h1>
            <div className="post">
                <div className="imageContainer">
                    <Image src="/p1.jpeg" alt="" width={100} height={100} className='image'/>
                </div>
                <div className="textContainer">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reiciendis enim</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus labore rerum aliquam iusto culpa ex voluptate, repellendus, doloribus magni odit fugit? Quisquam impedit sed non pariatur consectetur. Aliquam, exercitationem dolorum?</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured