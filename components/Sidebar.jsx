import Link from 'next/link'
import React from 'react'

const Sidebar = ({categories, setShowSidebar}) => {
    return (
        <div className='h-full w-full relative flex flex-col justify-center items-center text-2xl z-[1100]'>
                
            <div className="w-full text-center py-4 flex flex-col items-center justify-center">
                { categories.map((category)=>(
                    <Link href={`/category/${category.slug}`} key={category.slug} >
                        <span className="align-middle  space-x-4 font-semibold cursor-pointer  uppercase text-white leading-[4rem] hover:text-gray-700" onClick={()=>setShowSidebar(false)}>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
