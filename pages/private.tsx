import React, { useState } from 'react'
import {signIn, signOut, useSession} from "next-auth/client";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import '@uiw/react-md-editor/markdown-editor.css'
import "@uiw/react-markdown-preview/markdown.css"
import {MDEditorProps} from "@uiw/react-md-editor";
import {gql} from "@apollo/client";
import client from "../apollo-client";
import type {NextPage} from "next";
import {useRouter} from "next/router";
export const MDEditor = dynamic<MDEditorProps>(
    (() => import("@uiw/react-md-editor").then((mod) => mod.default) as any),
    { ssr: false }
)


const Page : NextPage = () => {
    const router = useRouter()

    const [session, loading] = useSession()
    const [markdown, setMarkdown] = useState<string | undefined>("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([""])

    const onSubmit = async () => {
        try {
            await client.mutate({
                mutation: gql`
                    mutation createPost($title: String, $tags: [String], $html: String) {
                        createPost(title: $title, tags: $tags, html: $html) {
                            _id
                            title
                            html
                            tags
                            createdAt
                        }
                    }
                `,
                variables: {
                    title: title,
                    tags: tags,
                    html: markdown
                }
            }).then(() => {
                alert('등록 되었습니다!')
                router.push('/')
            })
        } catch (err) {
            console.log(err)
            throw err
        }
    }


    if (loading) return <p>Loading...</p>
    return (
        <Layout>
            {!session && (
                <>
                    관리자만 들어갈 수 있습니다.<br/>
                    <button onClick={() => signIn()}>관리자 로그인</button>
                </>
            )}

            {session && (
                <>
                    {session.user?.name} 님 어서오세요
                    <button onClick={() => signOut()}>로그아웃</button>
                    <h1>글 쓰기</h1>
                    <input type="text" name="title" placeholder="제목" onChange={(e) => setTitle(e.target.value)} value={title}/>
                        <input type="text" name="tags" placeholder="태그" onChange={(e) => setTags([e.target.value])} value={tags}/>
                        <MDEditor value={markdown} onChange={setMarkdown}/>


                        <button onClick={async (e) => {
                            e.preventDefault()
                            await onSubmit()
                        }}>포스트</button>

                </>
            )}
        </Layout>
    )
}

export default Page