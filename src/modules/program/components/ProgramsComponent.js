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

const ProgramsComponent = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.domain);

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
        console.log(new Date(startsAt).getUTCDate());
        console.log(new Date(startsAt).toISOString().slice(0,19));
        dispatch(addProgramAction(
            name,
            new Date(startsAt).toISOString().slice(0,19),
            new Date(endsAt).toISOString().slice(0,19)
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
          <TablePrograms {...data} deleteItem={deleteItem} updateProgram={updateProgram} /><br />
          <AddProgram addProgram={addProgram} />
          <br />
          <br />
          <br />
      </>
    );
}

export default ProgramsComponent;