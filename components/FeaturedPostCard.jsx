import moment from 'moment'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const FeaturedPostCard = ({post}) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <div className='bg-gray-900 hover:bg-gray-400 flex justify-center items-center mx-3 h-72 rounded-xl shadow-lg relative overflow-hidden cursor-pointer '>
                            
                <div className="absolute w-full h-72 bg-cover opacity-30 transition-all duration-100 hover:blur-sm " style={{backgroundImage:`url(${post.featuredImage.url})`}} ></div>
                <div className="content flex flex-col justify-center items-center z-10 text-white pointer-events-none ">
                    <p>{moment(post.createdAt).format("MMM DD")}</p>
                    <p className="font-bold mt-4 text-center text-xl">{post.title}</p>
                </div>
                <div className='absolute flex items-center  bottom-2 text-white justify-center pointer-events-none'>
                <img 
                    src={post.author.photo.url}
                    alt={post.author.name}
                    className='w-10 h-10 rounded-full '
                />
                    <h1 className='text-center font-xs ml-4'>{post.author.name}</h1>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedPostCard
