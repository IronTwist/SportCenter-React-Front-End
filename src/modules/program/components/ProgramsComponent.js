import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePrograms from "./TablePrograms";
import AddProgram from "./AddProgram";
import {getProgramsListAction} from "../store/actions";

const ProgramsComponent = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.domain);

    useEffect(() => {

        const paginationFilter = {
            page: 1,
            perPage:10
        }

        dispatch(getProgramsListAction(paginationFilter));
    }, [dispatch]);

    return (
      <>
          <h2>Programs</h2><br/>
          <TablePrograms {...data} />
          <AddProgram />
          <br />
          <br />
          <br />
      </>
    );
}

export default ProgramsComponent;