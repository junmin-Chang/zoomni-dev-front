import Link from "next/link";
import {renderDate, renderTags} from "./index";
import {GET_CATEGORY_POSTS} from "../lib/query";
import {sidebarData} from "../components/SidebarData";
import Head from "next/head";
import {useRouter} from "next/router";
import client from "../apollo-client";
import Pagination from "../components/pagination";
import {useState} from "react";


export default function Posts({ posts } : any) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;

    const currentPosts = (tmp : object[]) => {
        let currentPosts : object[] = [];
        currentPosts = tmp.slice(firstIndex, lastIndex);
        return currentPosts;
    }
    const router = useRouter()
    const { category } = router.query
    return (
        <div>
            <Head>
                <title>{category} | ZOOMNI.DEV</title>
            </Head>
                <div className="flex items-center flex-col justify-center list-none">
                    <h1 className="text-gray-550 dark:text-white ml-4">{category}({posts.length})</h1>

                    {currentPosts(posts).map((post : any, index : any) => (
                        <Link href={`/posts/${post._id}`} key={index}>
                            <a className="group container mt-5 p-4 border-b-2">
                                <h3 className="text-black text-xl dark:text-white group-hover:text-purple-500">{post.title}</h3>
                                <p className="text-black dark:text-white">{renderDate(post.createdAt)}</p>
                                {renderTags(post.tags)}
                            </a>
                        </Link>
                    ))}
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>

                </div>
        </div>

    )
}

export async function getStaticProps({ params } : any) {
    const category = params.category
    const { data } = await client.query({
        query: GET_CATEGORY_POSTS,
        variables: {
            type : category
        }
    })

    return {
        props: {
            posts: data.category
        },
        revalidate: 1000,
    }
}
export async function getStaticPaths() {
    const paths = sidebarData.map(data => ({
        params: { category: data.title }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}