const PaginationNav = ({currentPaginationNavData, paginationChangeNav}) => {
    const currentPage = currentPaginationNavData.curPage;
    const currentPerPage = currentPaginationNavData.curPerPage;
    const totalElements = currentPaginationNavData.totalElements;
    const totalPages = Math.ceil(totalElements/currentPerPage);

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link"
                            onClick={() => paginationChangeNav(currentPage > 1? currentPage - 1 : 1, currentPerPage)}
                    >Previous</button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => paginationChangeNav(currentPage > 1? currentPage - 1 : 1, currentPerPage)}
                    >{(currentPage - 1) }</button></li>
                <li className="page-item active">
                    <button className="page-link">{currentPage}</button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => paginationChangeNav(currentPage < totalPages? currentPage + 1 : currentPage, currentPerPage)}
                    >{(currentPage + 1) }</button></li>
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => paginationChangeNav(currentPage < totalPages? currentPage + 1 : currentPage, currentPerPage)}
                    >Next</button>
                </li>
            </ul>
        </nav>
    );
}

export default PaginationNav;