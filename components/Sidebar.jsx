import Link from 'next/link'
import React from 'react'

const Sidebar = ({categories, setShowSidebar}) => {
    return (
        <div className='h-screen w-full relative bg-indigo-700 flex flex-col justify-center items-center text-2xl z-[1100] slide-left '>
            
            <div className='absolute right-10 top-10 cursor-pointer' onClick={()=>setShowSidebar(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </div>
                
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
