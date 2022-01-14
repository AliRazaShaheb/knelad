import React,{useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getRecentPosts, getSimilarPosts} from '../services'

const PostWidget = ({categories, slug}) => {

    const [relatedPost, setRelatedPost] = useState([])
    

    useEffect(()=>{
        if(slug){
            getSimilarPosts(categories, slug)
            .then((result)=>{
                setRelatedPost(result)
            })
        }else{
            getRecentPosts()
            .then((result)=>setRelatedPost(result))
        }
    }, [slug])


    return (
        <div className='bg-white/70 shadow-lg p-8 rounded-lg mb-8 '>
            <h3 className='font-semibold text-xl pb-4 border-b mb-8'>
                {slug ? 'Related Posts' : 'Recent Post'}
            </h3>
            {relatedPost.map((post)=>(
                <div key={post.title} className='flex items-center w-full mb- relative '>
                        <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden absolute">
                            <img 
                                src={post.featuredImage.url} 
                                alt={post.title} 
                                className='absolute h-full w-full object-cover '
                            />
                        </div>
                        <div className="ml-14 my-2 lg:my-1">
                            <p className='text-gray-700 font-bold'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <Link href={`/post/${post.slug}`} key={post.title}>
                                <p className='text-md text-gray-700  hover:text-blue-700 cursor-pointer break-all'>{post.title}</p>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
    )
}




export default PostWidget
