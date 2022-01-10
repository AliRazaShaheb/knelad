import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
    return (
        <div className='bg-black rounded-lg mt-20 mb-8 p-12 text-center bg-opacity-50 relative flex justify-center items-center '>
            <div className="absolute -top-14">
                <Image 
                    src={author.photo.url}
                    alt={author.name}
                    unoptimized
                    width={100}
                    height={100}
                    className='align-middle rounded-full'
                />
            </div>
            <div className=" text-white ">
            <h1 className='mt-8 my-4 text-center font-semibold text-lg'>{author.name}</h1>
            <p>{author.bio}</p>
            </div>
        </div>
    )
}

export default Author
