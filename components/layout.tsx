import Nav from "./Nav";
import React from "react";
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children} : LayoutProps) {
    return (
        <div>
            <div className="flex items-center justify-center">
                <Nav/>
            </div>
                <div className="max-w-3xl py-16 px-1 m-auto bg-white dark:bg-gray-750 py-2 min-h-screen">
                    {children}
                </div>

        </div>

    )
}