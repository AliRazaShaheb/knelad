import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';
import Sidebar from './Sidebar';




const Header = () => {
    const [categories, setCategories] = useState([])
    const [showSidebar, setShowSidebar] = useState(false)
    useEffect(()=>{
        getCategories()
        .then((newCategory)=>{
            return setCategories(newCategory)
        })
    },[])


    return (
        <>
            <div className="container px-5 mx-auto lg:px-28 mb-4 ">
                <div className="w-full flex justify-between py-8 items-center">
                    <div className="w-48">
                        <Link href="/">
                            <span className="cursor-pointer text-4xl text-gray-700">
                                kne<span className='font-bold'>Lad</span> 
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex justify-end w-full space-x-4 font-semibold text-gray-700 cursor-pointer">
                    {
                        categories.map((category)=>(
                            <Link href={`/category/${category.slug}`} key={category.slug}>
                                <span className='hover:text-blue-700 uppercase text-md'>
                                    {category.name}
                                </span>
                            </Link>
                        ))
                    }
                        
                    </div>
                    
                    <div className='cursor-pointer' onClick={()=>setShowSidebar(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </div>
                {/* <div className="w-full text-center py-4 border-t border-b border-gray-400 flex flex-wrap items-center justify-center">
                    { categories.map((category)=>(
                        <Link href={`/category/${category.slug}`} key={category.slug}>
                            <span className="align-middle text-gray-700 space-x-4 font-semibold cursor-pointer hover:text-red-700 uppercase ">
                                {category.name}
                                <span className='font-bold text-xl ml-2 mr-2'>•</span>
                            </span>
                        </Link>
                    ))}
                </div> */}
            </div>
            {showSidebar && (
            <div className='min-h-screen min-w-full absolute top-0 left-0 bg-gray-500/90 z-[1100]' onClick={()=>setShowSidebar(false)}>
             <Sidebar categories={categories} setShowSidebar = {setShowSidebar}/>
            </div>
            )}
        </>
    )
}


export default Header
