import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserByAdminAction, getUsersListAction} from "../store/actions";
import ViewUsersComponent from "./ViewUsersComponent";
import useUser from "../hooks/useUser";

const UsersComponent = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((store) => store.domain.users.data);
    const [displayError, setDisplayError] = useState(false);
    const [loggedUserIsAdmin, setLoggedUserIsAdmin] = useState(null);
    const isAdmin = useUser().isAdmin;

    const getUserList = () => {
        const paginationFilter = {
            page: 1,
            perPage: 10
        }

        dispatch(getUsersListAction(paginationFilter));
    }

    useEffect(() => {
       const paginationFilter ={
           page: 1,
           perPage: 10
       };

       dispatch(getUsersListAction(paginationFilter));
        setLoggedUserIsAdmin(isAdmin);
    }, [dispatch, isAdmin]);

    const deleteUserByAdmin = (id) => {

        if(loggedUserIsAdmin){
            setDisplayError(false);
            dispatch(deleteUserByAdminAction(id)).then(() => getUserList());
        }else{
            setDisplayError(true);
            setTimeout(() => setDisplayError(false), 5000);
        }
    }

    return (
        <>
            <h4>All users</h4>
            { displayError ? <div className="container-fluid alert alert-danger">You must be admin to delete users</div> : null }
            <ViewUsersComponent {...list} deleteUserByAdmin={deleteUserByAdmin} />
        </>
    );
}

export default UsersComponent;
