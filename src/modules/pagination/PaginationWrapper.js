import PaginationNav from "./PaginationNav";
import React from "react";
import PaginationNavTop from "./PaginationNavTop";

const PaginationWrapper = ({children, ...remainingProps}) => {
    return (
        <>
            <PaginationNavTop {...remainingProps} />
            {children}
            <PaginationNav {...remainingProps} />
        </>
    );
}

export default PaginationWrapper;