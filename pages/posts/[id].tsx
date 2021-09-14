import Head from "next/head";
import {GET_POST, getAllPostsId } from "../../lib/query";
import {renderDate} from "../index";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock";
import Layout from "../../components/layout";
import client from "../../apollo-client";
import Comment from "../../components/comment";
import remarkGfm from "remark-gfm";
export default function Post({ post } : any) {
    return (
        <div className="bg-white dark:bg-gray-750 mt-0 px-4 py-4 min-h-screen">

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