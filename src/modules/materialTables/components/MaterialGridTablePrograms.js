import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getProgramsListAction } from '../../program/store/actions';

// {

//
//   const [page, setPage] = useState(1);
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//
//   // eslint-disable-next-line no-console
//   console.log(rows);
//
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pagination
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         rowCount={total}
//         paginationMode="server"
//         onPageChange={(newPage) => {
//           setPage(newPage);
//         }}
//         loading={loading}
//       />
//     </div>
//   );
// }


// function loadServerRows(page, data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data.rows.slice(page * 5, (page + 1) * 5));
//     }, Math.random() * 500 + 100); // simulate network latency
//   });
// }

const MaterialGridTablePrograms = () => {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  const { total, items } = useSelector((state) => state.domain.programs.data.list);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const prevSelectionModel = useRef(selectionModel);

  const dispatchList = () => {
    const paginationFilter = {
      page,
      perPage: 5,
    };

    setLoading(true);
    dispatch(getProgramsListAction(paginationFilter))
      .then(() => setRows(items))
      .then(() => setLoading(false));
  };

  const columns = [
    {
      field: 'id',
      width: 150,
      type: 'number',
    },
    {
      field: 'name',
      width: 150,
      type: 'string',
    },
    {
      field: 'startsAt',
      width: 190,
      type: 'dateTime',
    },
    {
      field: 'endsAt',
      width: 190,
      type: 'dateTime',
    },
    {
      field: 'canceledAt',
      width: 190,
      type: 'dateTime',
    },
  ];

  useEffect(() => {
    let active = true;

    setLoading(true);
    dispatchList();

    if (!active) {
      return;
    }

    setLoading(false);
    setTimeout(() => {
      setSelectionModel(prevSelectionModel.current);
    });


    return () => {
      active = false;
    };
  }, [items]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        checkboxSelection
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={total}
        paginationMode="server"
        onPageChange={(newPage) => {
          prevSelectionModel.current = selectionModel;
          setPage(newPage);
        }}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        loading={loading}
      />
    </div>
  );
};

export default MaterialGridTablePrograms;
