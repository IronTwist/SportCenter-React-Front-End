import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserByAdminAction, getUsersListAction} from "../store/actions";
import ViewUsersComponent from "./ViewUsersComponent";
import {getProgramsListAction} from "../../program/store/actions";

const UsersComponent = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((store) => store.domain.users.data);

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
    }, [dispatch]);

    const deleteUserByAdmin = (id) => {
        dispatch(deleteUserByAdminAction(id)).then(() => getUserList());
    }

    return (
        <>
            <h4>All users</h4>
            <ViewUsersComponent {...list} deleteUserByAdmin={deleteUserByAdmin} />
        </>
    );
}

export default UsersComponent;