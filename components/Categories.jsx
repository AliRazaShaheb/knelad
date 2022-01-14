import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { getCategories } from '../services'


const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
        .then((newCategories)=>(
            setCategories(newCategories)
        ))
    }, [])
    return (
        <div className='shadow-lg bg-white/70 p-8 rounded-lg mb-8 overflow-hidden'>
            <h3 className='font-semibold text-xl pb-4 border-b mb-8'>
                Categories
            </h3>
            {categories.map(category=>(
                <Link href={`/category/${category.slug}`} key={category.slug}>
                    <p className='cursor-pointer mb-4 font-normal text-black hover:text-blue-600 hover:font-semibold' >
                        {category.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}

export default Categories

