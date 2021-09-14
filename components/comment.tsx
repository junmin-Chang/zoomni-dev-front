import { useEffect, useRef } from "react"

const Comment = () => {
    const commentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptEl =  document.createElement("script")
        const utteranceConfig = {
            src: "https://utteranc.es/client.js",
            repo: "junmin-Chang/zoomni-dev-front",
            theme: "github-light",
            async: 'true',
            crossorigin: "anonymous",
            label: "✨💬 comments ✨",
            "issue-term": "title"
        }

        Object.entries(utteranceConfig).forEach(([key, value]) =>  {
            scriptEl.setAttribute(key, value)
        })
        commentRef.current?.appendChild(scriptEl)
    },[])

    return (
        <div ref={commentRef}>

        </div>
    )
}

export default Comment
