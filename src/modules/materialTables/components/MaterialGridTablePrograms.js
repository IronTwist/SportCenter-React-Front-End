import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProgramsListAction } from '../../program/store/actions';

const MaterialGridTablePrograms = () => {
  const { total, items } = useSelector((state) => state.domain.programs.data.list);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(items);
  const [loading, setLoading] = useState(false);

  const dispatchList = () => {
    const paginationFilter = {
      page,
      perPage: rows,
    };

    setLoading(true);
    dispatch(getProgramsListAction(paginationFilter))
      .then(() => setRows(items))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    dispatchList();
  }, []);

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

  // eslint-disable-next-line no-console
  console.log(page);

  return (
    <div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={total}
        paginationMode="server"
        onPageChange={(newPage) => {
          // eslint-disable-next-line no-console
          // console.log(newPage + 1);
          setPage(newPage + 1);
        }}
        loading={loading}
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default MaterialGridTablePrograms;


