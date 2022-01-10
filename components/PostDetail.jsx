import React, { Fragment } from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'


const PostDetail = ({post}) => {

    const getContent = (index, text, obj, type)=>{
        let modifiedText = text
        if(obj){
            if(obj.bold){
                modifiedText = (<b key={index}>{text}</b>);
            }
            if(obj.italic){
                modifiedText = (<em key={index}>{text}</em>)
            }
            if(obj.underline){
                modifiedText = (<u key={index}>{text}</u>)
            }
        }
        switch(type){
            case 'paragraph-three':
                return <h3 key={index} className='text-xl font-semibold mb-4' >{modifiedText.map((item, i)=>(<Fragment key={i}>{item}</Fragment>))}</h3>
            case 'paragraph':
                return <p key={index} className='text-xl mb-4' >{modifiedText.map((item, i)=>(<Fragment key={i}>{item}</Fragment>))}</p>
            case 'paragraph-four':
                return <h4 key={index} className='text-md font-semibold mb-4' >{modifiedText.map((item, i)=>(<Fragment key={i}>{item}</Fragment>))}</h4>
            case 'heading-four':
                return <h1 key={index} className='text-2xl font-bold mb-4' >{modifiedText.map((item, i)=>(<Fragment key={i}>{item}</Fragment>))}</h1 >
            case 'heading-six':
                return <h1 key={index} className='text-xl font-bold mb-4' >{modifiedText.map((item, i)=>(<Fragment key={i}>{item}</Fragment>))}</h1 >

            case 'image':
                return (
                    <img
                        key={index}
                        alt= {obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
            
        }
    }

    return (
        <div className='rounded-lg pt-0 lg:pt-0 pb-12 mb-8 '>
            <div className="relative overflow-hidden shadow-md mb-6 rounded-lg ">
                <img 
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className='object-top h-full w-full ' 
                />
            </div>
            <div className="px-4 lg:px-0">
                <div className="block xs:flex justify-between items-center mb-8 w-full ">
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
            </div>
                <div className="px-4 lg:px-0 post-section">
                    <h1 className='font-semibold text-[2rem] text-center xs:text-left'>{post.title}</h1>
                    {console.log(post.content.raw.children)}
                    {/* {post.content.raw.children.map((typeObj, index)=>{
                        const children = typeObj.children.map((item, itemIndex)=>{
                            return getContent(itemIndex, item.text, item)
                        })
                        return getContent(index, children, typeObj, typeObj.type)
                    })} */}
                    <RichText 
                        content={post.content.raw.children}
                        renderers={{
                            h1: ({ children }) => <h1 className="font-bold text-2xl">{children}</h1>,
                            h2: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
                            h3: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
                            h4: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
                            h5: ({ children }) => <h2 className="font-bold text-md">{children}</h2>,
                            h6: ({ children }) => <h2 className="font-bold text-sm">{children}</h2>,
                            p: ({ children }) => <p className="leading-8 text-md">{children}</p>,
                            li: ({ children }) => <li className="leading-8 text-md">{children}</li>,
                            bold: ({ children }) => <strong>{children}</strong>,
                            
                        }}
                    />
                </div>
        </div>
    )
}

export default PostDetail
