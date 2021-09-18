import React from "react";

export interface PaginationProps {
    current: number;
    onChange(page: number) : void;
    hasNext: boolean

}
export const Pagination: React.FC<PaginationProps> = ({
    current,
    onChange,
    hasNext
}) => {
    return (
        <div>
            <div>{current}</div>
            <div>next</div>
        </div>
    )
}