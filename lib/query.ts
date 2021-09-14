import client from "../apollo-client";
import {gql} from "@apollo/client";

export const GET_ALL_POSTS = gql`
    query {
        posts {
            _id
            tags
            title
            html
            createdAt
        }
    }
`

export const GET_POST = gql`
    query getPost($_id: String) {
        post(_id: $_id) {
            _id
            title
            html
            createdAt
        }
    }
`
export const GET_CATEGORY_POSTS = gql`
    query getCategoryPosts($type: String) {
        category(type: $type) {
            _id
            title
            createdAt
            tags
        }
    }
`

// export const CREATE_POST = gql`
//     mutation createPost($title: String, $tags: [String], $html: String) {
//         createPost(title: $title, tags: $tags, html: $html) {
//             _id
//             title
//             html
//             tags
//             createdAt
//         }
//     }
// `


export async function getAllPostsId() {
    const { data } = await client.query({
        query: gql`
            query {
                posts {
                    _id
                }
            }
        `
    })

    return data.posts.map((post : any) => ({
        params: { id: post._id }
    }))
}