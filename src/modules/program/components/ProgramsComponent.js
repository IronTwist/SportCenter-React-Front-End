import React, {useEffect} from "react";
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

const ProgramsComponent = () => {
    const dispatch = useDispatch();
    const {list} = useSelector((state) => state.domain.programs.data);

    const dispatchList = () =>{
        const paginationFilter = {
            page: 1,
            perPage: 10
        }

        dispatch(getProgramsListAction(paginationFilter));
    }

    useEffect(() => {
        const paginationFilter = {
            page: 1,
            perPage: 10
        }

        dispatch(getProgramsListAction(paginationFilter));

    }, [dispatch]);

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
          <TablePrograms {...list} deleteItem={deleteItem} updateProgram={updateProgram} /><br />
          <AddProgram addProgram={addProgram} />
          <br />
          <br />
          <br />
      </>
    );
}

export default ProgramsComponent;
