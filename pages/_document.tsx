import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GA}', {
                              page_path: window.location.pathname,
                            });
                          `,
                        }}
                    />
                    <script data-ad-client="ca-pub-8146416328460944" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <meta name="description" content="프론트엔드 개발을 하며 배운 것, 시행착오들을 기록하는 블로그 입니다."/>
                </Head>
                <body className="bg-white dark:bg-gray-750">
                <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}