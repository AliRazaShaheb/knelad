import React,{useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'react-html-parser'
import {getComments} from '../services'

const Comments = ({slug}) => {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments(slug)
        .then((result)=>setComments(result))
    },[])



    return (
        <>
            {comments.length > 0 && (
                <div className='bg-white/70 shadow-lg rounded-lg p-8 pb-12 mb-8'>
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                        {comments.length}
                        {' '}
                        {comments.length < 2 ? "Comment": "Comments"}
                    </h3>
                    { comments.map((comment)=>(
                        <div key={comment.createdAt} className='border-b border-gray-100 mb-4 pb-4' >
                            <p className='mb-4'>
                                <span className='font-semibold mr-8'>
                                    {comment.name}
                                </span>
                                <span className= 'text-xs' >
                                    {moment(comment.createdAt).format("MMM DD")}
                                </span>
                            </p>
                            <p className='whitespace-pre-line text-gray-600 w-full'>
                                {parse(comment.comment)}
                            </p>
                        </div>
                    )) }
                </div>
            )}
        </>
    )
}



export default Comments
