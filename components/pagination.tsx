import React from 'react';



interface PaginationProps {
    postsPerPage: number
    totalPosts: number
    paginate: (n: number) => void
}

const Pagination : React.FC<any> = ({ postsPerPage, totalPosts, paginate } : PaginationProps) => {
    const pageNumbers : number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="bg-purple-400 float-left mt-4 mb-4 text-center rounded-md text-white p-px">
                    {pageNumbers.map(number => (
                        <li key={number} className="inline-block text-base font-semibold rounded-md p-1 w-6 hover:bg-purple-500">
                            <span onClick={() => paginate(number)} className="text-white">
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}


export default Pagination