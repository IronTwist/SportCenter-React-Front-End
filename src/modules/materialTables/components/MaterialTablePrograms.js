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
import { BiDownArrow, BiUpArrow } from 'react-icons/all';
import { getProgramsListAction } from '../../program/store/actions';

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

  const sortByName = (direction) => {
    const list = [...displayList];

    if (direction === 'asc') {
      list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      columns[columns.map((e) => e.label).indexOf('Name')].direction = invertDirection.asc;
    }

    if (direction === 'desc') {
      list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });

      columns[columns.map((e) => e.label).indexOf('Name')].direction = invertDirection.desc;
    }

    itemsToDisplay(list);
  };

  const sortNumberId = (direction) => {
    const list = [...displayList];

    if (direction === 'asc') {
      list.sort((a, b) => {
        const idA = a.id;
        const idB = b.id;

        return idA - idB;
      });

      columns[columns.map((e) => e.label).indexOf('Id')].direction = invertDirection.asc;
    }

    if (direction === 'desc') {
      list.sort((a, b) => {
        const idA = a.id;
        const idB = b.id;

        return idB - idA;
      });

      columns[columns.map((e) => e.label).indexOf('Id')].direction = invertDirection.desc;
    }

    itemsToDisplay(list);
  };

  const sortDateStartAt = (direction) => {
    const list = [...displayList];

    if (direction === 'asc') {
      list.sort((a, b) => {
        const dateA = new Date(a.startsAt);
        const dateB = new Date(b.startsAt);

        return dateA - dateB;
      });

      columns[columns.map((e) => e.label).indexOf('Start Date')].direction = invertDirection.asc;
    }

    if (direction === 'desc') {
      list.sort((a, b) => {
        const dateA = new Date(a.startsAt);
        const dateB = new Date(b.startsAt);

        return dateB - dateA;
      });

      columns[columns.map((e) => e.label).indexOf('Start Date')].direction = invertDirection.desc;
    }

    itemsToDisplay(list);
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
                    {(column.sort === 'id' && column.direction === 'asc')
                    && <BiDownArrow onClick={() => sortNumberId('asc')}/>}
                    {(column.sort === 'id' && column.direction === 'desc')
                    && <BiUpArrow onClick={() => sortNumberId('desc')}/>}

                    {(column.sort === 'name' && column.direction === 'asc')
                    && <BiDownArrow onClick={() => sortByName('asc')}/>}
                    {(column.sort === 'name' && column.direction === 'desc')
                    && <BiUpArrow onClick={() => sortByName('desc')}/>}

                    {(column.sort === 'startAt' && column.direction === 'asc')
                    && <BiDownArrow onClick={() => sortDateStartAt('asc')}/>}
                    {(column.sort === 'startAt' && column.direction === 'desc')
                    && <BiUpArrow onClick={() => sortDateStartAt('desc')}/>}
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
