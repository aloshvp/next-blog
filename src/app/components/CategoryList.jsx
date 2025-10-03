import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
    return (
        <div className='categoryListWrapper'>
            <h1>Popular Categories</h1>
            <div className="categoryList">
                <Link href="/blog?cat=style" className='categoryItem style'>
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                    Style
                </Link>
                <Link href="/blog?cat=style" className='categoryItem fashion'>
                    <Image src="/fashion.png" alt="category1" width={32} height={32} className='image' />
                    Fashion
                </Link>
                <Link href="/blog?cat=style" className='categoryItem food'>
                    <Image src="/food.png" alt="category1" width={32} height={32} className='image' />
                    Food
                </Link>
                <Link href="/blog?cat=style" className='categoryItem travel'>
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                    Travel
                </Link>
                <Link href="/blog?cat=style" className='categoryItem culture'>
                    <Image src="/style.png" alt="category1" width={32} height={32} className='image' />
                    Culture
                </Link>
            </div>
        </div>
    )
}

export default CategoryList