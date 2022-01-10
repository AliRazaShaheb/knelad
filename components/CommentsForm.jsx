import React, {useState, useRef, useEffect} from 'react'
import {submitComment} from '../services'


const CommentsForm = ({slug}) => {

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

   useEffect(()=>{
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
   },[])


    const handleCommentSubmission = ()=>{

        if(!commentEl.current.value || !nameEl.current.value || !emailEl.current.value){
            setShowSuccessMsg(false)
            setError(true)
        } else{
            setError(false)
            setShowSuccessMsg(true)
            // commentEl.current.value = '';
            // nameEl.current.value = '';
            // emailEl.current.value = '';
        }

        const commentObj = {
            comment:commentEl.current.value,
            name:nameEl.current.value,
            email:emailEl.current.value,
            storeData:storeDataEl.current.checked,
            slug
        }

        if(commentObj.storeData){
            window.localStorage.setItem('name', commentObj.name);
            window.localStorage.setItem('email', commentObj.email);
        } else{
            window.localStorage.removeItem('name', commentObj.name);
            window.localStorage.removeItem('email', commentObj.email);
        }

        submitComment(commentObj)
            .then((res)=>{
                setShowSuccessMsg(true)
                setTimeout(()=>{
                    setShowSuccessMsg(false)
                }, 3000)
            })

    }

    return (
        <div className="bg-white/70 p-8 w-full rounded-lg shadow-lg flex flex-col mb-8">
                <div >
                    <h3 className='font-semibold text-lg pb-4'>Leave a comment</h3>
                    <hr className='mb-4'/>
                </div>
                <div>
                    <textarea 
                        name='comment'
                        ref={commentEl}
                        placeholder='comment'
                        className='w-full bg-white/70 p-4 rounded-lg outline-none focus:ring-2 ring-indigo-800 mb-4 border
                        h-40'
                    />
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4'>
                    <input 
                        type="text"
                        name='name'
                        ref={nameEl}
                        placeholder='name'
                        className='w-full bg-white/70 p-4 rounded-lg outline-none focus:ring-2 ring-indigo-800 border'
                    />
                    <input 
                        type="email"
                        name='email'
                        ref={emailEl}
                        placeholder='email'
                        className='w-full bg-white/70 p-4 rounded-lg outline-none focus:ring-2 ring-indigo-800 border'
                    />
                </div>
                <div className='flex  items-center gap-4 mt-8 mb-8'>
                    <input type="checkbox" id="storageCheck" ref={storeDataEl} name='storageCheck' value="true" className='text-gray-500 text-md cursor-pointer'/>
                    <label htmlFor='storageCheck' className='text-gray-500 text-md cursor-pointer'>
                        Save me for next time I comment
                    </label>
                </div>

                {error && <p className='text-md text-red-500 text-center mb-2'>All feilds are required...</p>}
                {showSuccessMsg && <p className='text-md text-green-500 text-center mb-2'>Comment submitted for review</p>}
                <button type='button' className='bg-indigo-500 px-10 py-3 rounded-lg text-white font-semibold uppercase hover:bg-indigo-700 transition-all duration-500' onClick={handleCommentSubmission} >
                    Submit Comment
                </button>
        </div>
    )
}

export default CommentsForm
