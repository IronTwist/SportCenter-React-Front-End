import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersListAction} from "../store/actions";
import ViewUsersComponent from "./ViewUsersComponent";

const UsersComponent = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((store) => store.domain.users.data);

    useEffect(() => {
       const paginationFilter ={
           page: 1,
           perPage: 10
       };

       dispatch(getUsersListAction(paginationFilter));
    }, [dispatch]);

    return (
        <>
            <h4>All users</h4>
            <ViewUsersComponent {...list} />
        </>
    );
}

export default UsersComponent;