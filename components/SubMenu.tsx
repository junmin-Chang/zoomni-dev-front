import Link from 'next/link'
import {useState} from "react";

const SubMenu = ({ item, onClick } : any) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <Link href={item.path}>
                <div>
                    <a className="flex text-black justify-between items-center p-5 h-16 text-lg hover:bg-purple-700 hover:text-white cursor-pointer"
                       onClick={item.subNav ? showSubnav : onClick}>
                        <span className="ml-4">{item.title}</span>
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                                ? item.iconClosed
                                : null
                        }
                    </a>
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item : any, index : any) => {
                    return (
                        <Link href={item.path} key={index}>
                            <a className="bg-white h-16 pl-12 flex items-center no-underline text-black text-lg hover:text-white hover:bg-purple-700 cursor-pointer"
                               onClick={onClick}
                            >
                                <span className="lt-4 text-sm">{item.title}</span>
                            </a>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default SubMenu