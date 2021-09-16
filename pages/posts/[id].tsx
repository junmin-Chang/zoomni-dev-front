import Head from "next/head";
import {GET_POST, getAllPostsId } from "../../lib/query";
import {renderDate} from "../index";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock";
import client from "../../apollo-client";
import Comment from "../../components/comment";
import remarkGfm from "remark-gfm";
import {useEffect, useState} from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
export default function Post({ post } : any) {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
    } ,[])

    return (
        <div className="bg-white dark:bg-gray-750 mt-0 px-4 py-4 min-h-screen">
            <button
                onClick={scrollToTop}
                className={`fixed bg-purple-500 text-white rounded-full p-2 z-50 bottom-2 right-3 ${visible ? 'inline' : 'none'}`}
            >
                <AiOutlineArrowUp className="text-3xl"/>
            </button>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.html}/>
                <meta name="og:description" content={post.html}/>
                <meta name="date" content={post.createdAt}/>
            </Head>
            <div className="text-black dark:text-gray-100 min-h-screen">
                <h1 className="title">{post.title}</h1>
                <div>
                    <h3 className="text-xl font-medium">{renderDate(post.createdAt)}</h3>
                </div>
                <hr/>
                <ReactMarkdown components={CodeBlock} remarkPlugins={[remarkGfm]}>{post.html}</ReactMarkdown>
                    <Comment/>
            </div>
        </div>


    )
}

export async function getStaticProps({ params } : any) {
    const id = params.id
    const { data } = await client.query({
        query: GET_POST,
        variables: {
            _id : id
        }
    })

    return {
        props : {
            post : data.post
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const paths = await getAllPostsId()
    return {
        paths,
        fallback: 'blocking'
    }
}