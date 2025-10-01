import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
    return (
        <div>
            <h1>Popular Categories</h1>
            <div className="categoryList">
                <Link href="/blog?cat=style">
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                </Link>
                <Link href="/blog?cat=style">
                    <Image src="/fashion.png" alt="category1" width={32} height={32} className='image' />
                </Link>
                <Link href="/blog?cat=style">
                    <Image src="/food.png" alt="category1" width={32} height={32} className='image' />
                </Link>
                <Link href="/blog?cat=style">
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                </Link>
                <Link href="/blog?cat=style">
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                </Link>
            </div>
        </div>
    )
}

export default CategoryList