import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { Search } from '.';
import { getCategories } from '../services';
import Sidebar from './Sidebar';
import knelad from '../public/knelad.svg'
import Image from 'next/image';





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
                    <div className="w-56 cursor-pointer">             
                        <Image src={knelad} alt='knelad_logo' width="33px" height="33px"/>
                        <Link href="/">
                            <span className="text-3xl text-gray-700">
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
                {/* <div className="w-full">
                        <Search />
                </div> */}
                
            </div>
            {showSidebar && (

            <div className='min-h-screen flex justify-center items-center min-w-full absolute top-0 left-0  bg-indigo-900 z-[1100]' >
             <Sidebar categories={categories} setShowSidebar = {setShowSidebar}/>
             <div className='absolute right-10 top-10 cursor-pointer' onClick={()=>setShowSidebar(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </div>
            </div>
            )}
            
        </>
    )
}


export default Header

