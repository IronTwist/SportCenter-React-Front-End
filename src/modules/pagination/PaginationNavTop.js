const PaginationNavTop = ({currentPaginationNavData, paginationChangeNav}) => {
    const currentPage = currentPaginationNavData.curPage;
    const currentPerPage = currentPaginationNavData.curPerPage;
    const totalElements = currentPaginationNavData.totalElements;
    const totalPages = Math.ceil(totalElements/currentPerPage);

    const changePage = (newPage) => {
        paginationChangeNav(Number(newPage), currentPerPage)
    }

    const changePerPage = (newPerPage) => {
        paginationChangeNav(currentPage, Number(newPerPage));
    }

    return (
      <>
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-12 col-sm-6 col-md-8">
                    <div className="input-group mb-3 float-md-right" style={{width: "250px", marginLeft: "30px"}}>
                        <input className="form-control"
                               type="number" id="pageId"
                               min="1"
                               defaultValue={currentPerPage}
                               onChange={(e) => changePerPage(e.target.value)}
                        />
                            <div className="input-group-prepend">
                                <span className="input-group-text">elem/page(total: {totalElements})</span>
                            </div>
                    </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="input-group mb-3 float-md-right" style={{width: "270px", marginLeft: "30px"}}>
                        <input className="form-control"
                               type="number" id="pageId"
                               min="1"
                               max={totalPages.toString()}
                               value={currentPage.toString()}
                               onChange={(e) => changePage(e.target.value)}
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text">current page/total: {totalPages}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default PaginationNavTop;