import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className="bg-white/70 rounded-lg shadow-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden pb-80 mb-6 rounded-lg">
                <img 
                    src={post.featuredImage.url} 
                    alt={post.title} 
                    className="object-top absolute w-full object-cover "
                />
            </div>
            <h1 className="text-center transition duration-500 hover:text-pink-500 text-2xl font-semibold mb-8">
                <Link href={`/post/${post.slug}`} className="cursor-pointer ">
                    {post.title}
                </Link>
            </h1>
            <div className="mb-8">
                <div className="block lg:flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                   <div className="flex justify-center items-center">
                    <img src={post.author.photo.url} alt={post.author.name} 
                            className="w-10 h-10 rounded-full align-middle"
                        />
                        <p className="ml-4 inline align-middle text-gray-700 text-lg">
                            {post.author.name}
                        </p>
                   </div>
                    
                    <div className="font-medium text-gray-700 flex items-center justify-center ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>

                        <span className="ml-2">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>
                </div>
                <p className="text-center text-lg text-gray-700 px-4 font-normal lg:px-20 mb-8">{post.excerpt}</p>
                <div className="text-center">
                    <Link href={`/post/${post.slug}`}>
                        <span className="transition duration-500 transform hover:translate-y-1 inline-block bg-pink-600 px-5 py-3 rounded-full text-white font cursor-pointer flex-wrap">Continue Reading</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
