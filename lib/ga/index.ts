declare global {
    interface Window {
        gtag: (param1: string, param2: string | undefined, param3: object) => void
    }
}

export const pageview = (url : any) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA, {
        page_path: url
    })
}