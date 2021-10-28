import React, { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { getProgramsListAction } from '../../program/store/actions';
import { sortByName, sortColumn, sortDateStartAt, sortNumberId } from '../../../data/tableSortFunctions';

const columns = [
  { id: 'id',
    label: 'Id',
    minWidth: 60,
    sort: 'id',
    direction: 'asc',
  },
  { id: 'name',
    label: 'Name',
    minWidth: 100,
    flex: 1,
    sort: 'name',
    direction: 'asc',
    renderCell: (value) => (
      <strong>
        {`${value}`}
      </strong>
    ),
  },
  {
    id: 'startsAt',
    label: 'Start Date',
    minWidth: 170,
    align: 'right',
    type: 'dateTime',
    sort: 'startAt',
    direction: 'asc',
    flex: 1,
  },
  {
    id: 'endsAt',
    label: 'End Date',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'canceledAt',
    label: 'Cancel Date',
    minWidth: 170,
    align: 'right',
  },
];

const invertDirection = {
  asc: 'desc',
  desc: 'asc',
};

const MaterialTablePrograms = () => {
  const dispatch = useDispatch();
  const { total, items } = useSelector((state) => state.domain.programs.data.list);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage, setCurrentPerPage] = useState(5);
  const totalPages = Math.ceil(total / currentPerPage);
  const [loading, setLoading] = useState(false);
  const [displayList, setDisplayList] = useState([]);

  const dispatchList = (value = 1) => {
    const paginationFilter = {
      page: value,
      perPage: currentPerPage,
    };

    setLoading(true);
    dispatch(getProgramsListAction(paginationFilter))
      .then(() => setLoading(false));
  };

  const itemsToDisplay = (items) => {
    setDisplayList(items);
  };

  const perPageChange = (event) => {
    setCurrentPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
    dispatchList(value);
  };

  useEffect(() => {
    dispatchList();
  }, [currentPerPage]);

  useEffect(() => {
    itemsToDisplay(items);
  }, [items]);

  return (
    <>
      <Box sx={{ minWidth: 140, maxWidth: 140 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="perPageSelectLabel">Programs per page</InputLabel>
          <Select
            labelId="perPageSelectLabel"
            id="perPageSelect"
            value={currentPerPage}
            label="Programs per page"
            onChange={perPageChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                    {sortColumn('id', sortNumberId, column, displayList,
                      itemsToDisplay, columns, invertDirection)}
                    {sortColumn('name', sortByName, column, displayList,
                      itemsToDisplay, columns, invertDirection)}
                    {sortColumn('startAt', sortDateStartAt, column, displayList,
                      itemsToDisplay, columns, invertDirection)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && <CircularProgress sx={{ margin: '30px' }} />}
              { displayList && displayList.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.label === 'Name'
                          ? column.renderCell(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Typography sx={{ alignContent: 'flex-end' }}>Page: {currentPage}</Typography>
          <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
        </Stack>
      </Paper>
    </>
  );
};

export default MaterialTablePrograms;
