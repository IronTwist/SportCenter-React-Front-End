import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUserByAdminAction, getUsersListAction } from '../store/actions';
import ViewUsersComponent from './ViewUsersComponent';
import useUser from '../hooks/useUser';
import PaginationWrapper from '../../pagination/PaginationWrapper';

const UsersComponent = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.domain.users.data);
  const [displayError, setDisplayError] = useState(false);
  const [loggedUserIsAdmin, setLoggedUserIsAdmin] = useState(null);
  const { isAdmin } = useUser();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage, setCurrentPerPage] = useState(3);

  const currentPaginationNavData = {
    curPage: currentPage,
    curPerPage: currentPerPage,
    totalElements: list.total,
  };

  const paginationChangeNav = (newPage, newPerPage) => {
    setCurrentPage(newPage);
    setCurrentPerPage(newPerPage);
  };

  const getUserList = () => {
    const paginationFilter = {
      page: currentPage,
      perPage: currentPerPage,
    };

    dispatch(getUsersListAction(paginationFilter));
  };

  useEffect(() => {
    const paginationFilter = {
      page: currentPage,
      perPage: currentPerPage,
    };

    dispatch(getUsersListAction(paginationFilter));
    setLoggedUserIsAdmin(isAdmin);
  }, [dispatch, isAdmin, currentPage, currentPerPage]);

  const deleteUserByAdmin = (id) => {
    if (loggedUserIsAdmin) {
      setDisplayError(false);
      dispatch(deleteUserByAdminAction(id)).then(() => getUserList());
    } else {
      setDisplayError(true);
      setTimeout(() => setDisplayError(false), 5000);
    }
  };

  return (
    <>
      { displayError ? (
        <div className="container-fluid alert alert-danger">
          You must be admin to delete users
        </div>
      ) : null }
      <PaginationWrapper
        currentPaginationNavData={currentPaginationNavData}
        paginationChangeNav={paginationChangeNav}
      >
        <ViewUsersComponent {...list} deleteUserByAdmin={deleteUserByAdmin} />
      </PaginationWrapper>
    </>
  );
};

export default UsersComponent;
