import type { NextPage } from 'next'
import client from "../apollo-client";
import Link from 'next/link'
import Head from "next/head";
import Layout from "../components/layout";
import {GET_ALL_POSTS} from "../lib/query";
export const renderDate =  (dateString : string) => {
    const date = new Date(dateString);
    const monthName = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    return `${date.getFullYear()}년 ${monthName[date.getMonth()]} ${date.getDate()}일`;

}

export const renderTags = (tags : string[]) => {
    return tags.map((tag,idx) => {
        return  <div className="inline-block mr-2 bg-purple-700 text-white rounded text-base mb-2 px-2" key={idx}><span>{tag}</span></div>
    })
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_ALL_POSTS
    })
    return {
        props : {
            posts: data.posts
        },
        revalidate: 10
    }
}

const Home: NextPage = ({posts} : any) => {
  return (
      <div>
          <Head>
              <title>ZOOMNI.DEV</title>
              <meta property="og:title" content="ZOOMNI.DEV | 개발 일지"/>
              <meta property="og:description" content="장준민의 개발 일기 입니다."/>
          </Head>

              <div className="flex items-center flex-col justify-center list-none">
                  {posts.map((post : any, index : any) => (
                      <Link href={`/posts/${post._id}`} key={index}>
                          <a className="group container mt-5 p-4 border-b-2">
                              <h3 className="text-black text-xl dark:text-white mt-4 group-hover:text-purple-500">{post.title}</h3>
                              <p className="text-black dark:text-white mb-4">{renderDate(post.createdAt)}</p>
                              {renderTags(post.tags)}
                          </a>
                      </Link>
                  ))}
              </div>
      </div>


  )
}

export default Home
