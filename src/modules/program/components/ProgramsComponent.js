import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgramsSuccessAsync } from "../../../store/asyncActions";
import TablePrograms from "./TablePrograms";
import AddProgram from "./AddProgram";

const ProgramsComponent = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.domain);

    useEffect(() => {
        dispatch(getProgramsSuccessAsync());
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