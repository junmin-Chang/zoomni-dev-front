import Link from 'next/link'
import {useState} from "react";
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {sidebarData} from "./SidebarData";
import {SiGithub} from "react-icons/si";
import useDarkMode from "./useDarkMode";
import Head from "next/head";
import SubMenu from "./SubMenu";
function Nav() {
    const [sidebar, setSidebar] = useState(false);
    const [colorTheme, setTheme] = useDarkMode()
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            </Head>
        <div className="navbar">

            <div className="flex">
                    <Link href="#">
                        <a className="ml-8 text-3xl h-20 flex justify-start items-center text-white">
                            <FaBars onClick={showSidebar} className="-mt-8"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="home-title">
                            <h3 className="logo">ZOOMNI.DEV</h3>
                        </a>
                    </Link>
            </div>
                    <div>
                        {colorTheme === "light" ? (
                            <svg
                                onClick={() => setTheme("light")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white mt-1 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>

                        ) : (
                            <svg
                                onClick={() => setTheme("dark")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white mt-1 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </div>
                </div>
                <nav className={`bg-white w-64 h-screen flex justify-center fixed top-0 z-10 overflow-scroll ${sidebar ? "left-0" : "-left-full"}`}>
                    <div className="w-full">
                            <Link href="#">
                                <a className="ml-8 text-3xl h-20 flex justify-start items-center">
                                    <AiOutlineClose onClick={showSidebar} style={{
                                        color: '#000'
                                    }}/>
                                </a>
                            </Link>
                        <Link href="https://github.com/junmin-Chang">
                            <a className="ml-8 w-20 px-0 flex justify-start items-center mb-4">
                                <SiGithub className="text-black text-2xl ml-6"/>
                            </a>
                        </Link>
                        {sidebarData.map((item, index) => (
                            <SubMenu item={item} key={index}/>
                        ))}
                    </div>
                </nav>
        </>

    )
}

export default Nav