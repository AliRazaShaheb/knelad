import React from 'react'

const Search = () => {
    return (
        <div className='mb-8 w-[90%] md:w-1/2 h-12 bg-white/50 rounded-[1.5rem] mx-auto p-2 flex justify-center items-center shadow-lg'>
            <input type="text" name='search' placeholder='search content' className='h-full w-full bg-transparent outline-none text-black pl-4'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
    )
}

export default Search
