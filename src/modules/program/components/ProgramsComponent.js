import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePrograms from "./TablePrograms";
import AddProgram from "./AddProgram";
import {
    addProgramAction,
    deleteProgramAction,
    getProgramsListAction,
    updateProgramAction
} from "../store/actions";
import moment from "moment";
import PaginationNav from "./PaginationNav";
import PaginationNavTop from "./PaginationNavTop";

const ProgramsComponent = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.domain.programs.data);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPerPage, setCurrentPerPage] = useState(5);

    const currentPaginationNavData = {
        curPage: currentPage,
        curPerPage: currentPerPage,
        totalElements: list.total
    }

    const paginationChangeNav = (newPage, newPerPage) => {
        setCurrentPage(newPage);
        setCurrentPerPage(newPerPage);
    }

    const dispatchList = () =>{
        const paginationFilter = {
            page: currentPage,
            perPage: currentPerPage
        }

        dispatch(getProgramsListAction(paginationFilter));
    }

    useEffect(() => {
        const paginationFilter = {
            page: currentPage,
            perPage: currentPerPage
        }

        dispatch(getProgramsListAction(paginationFilter));
    }, [dispatch, currentPage, currentPerPage]);

    const deleteItem = (id) => {
        dispatch(deleteProgramAction(id))
            .then(() => {
                dispatchList();
            });
    }

    const addProgram = (name, startsAt, endsAt) => {
        const startDate = moment(startsAt).format("YYYY-MM-DDTHH:mm:ss");
        const endDate = moment(endsAt).format("YYYY-MM-DDTHH:mm:ss");

        dispatch(addProgramAction(
            name,
            startDate,
            endDate
        ))
            .then(() => {
                dispatchList();
            });
    }

    const updateProgram = (id, name, startsAt, endsAt) => {
        dispatch(updateProgramAction(
            id,
            name,
            new Date(startsAt).toISOString().slice(0,19),
            new Date(endsAt).toISOString().slice(0,19)
            ))
            .then(() => dispatchList());
    }

    return (
      <>
          <br />
          <h2>Health Center Programs</h2><br/>
          <PaginationNavTop
              currentPaginationNavData={currentPaginationNavData}
              paginationChangeNav={paginationChangeNav}
          />
          <TablePrograms {...list} deleteItem={deleteItem} updateProgram={updateProgram} /><br />
          <PaginationNav
              currentPaginationNavData={currentPaginationNavData}
              paginationChangeNav={paginationChangeNav}
          />
          <AddProgram addProgram={addProgram} />
          <br />
          <br />
          <br />
      </>
    );
}

export default ProgramsComponent;
