import { BiDownArrow, BiUpArrow } from 'react-icons/all';
import React from 'react';

export const sortByName = (direction, displayList, columns, invertDirection, itemsToDisplay) => {
  const list = [...displayList];
  const columnList = [...columns];

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

    columnList[columnList.map((e) => e.label).indexOf('Name')].direction = invertDirection.asc;
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

    columnList[columnList.map((e) => e.label).indexOf('Name')].direction = invertDirection.desc;
  }

  itemsToDisplay(list);
};

export const sortNumberId = (direction, displayList, columns, invertDirection, itemsToDisplay) => {
  const list = [...displayList];
  const columnList = [...columns];

  if (direction === 'asc') {
    list.sort((a, b) => {
      const idA = a.id;
      const idB = b.id;

      return idA - idB;
    });

    columnList[columnList.map((e) => e.label).indexOf('Id')].direction = invertDirection.asc;
  }

  if (direction === 'desc') {
    list.sort((a, b) => {
      const idA = a.id;
      const idB = b.id;

      return idB - idA;
    });

    columnList[columnList.map((e) => e.label).indexOf('Id')].direction = invertDirection.desc;
  }

  itemsToDisplay(list);
};

export const sortDateStartAt = (direction, displayList, columns, invertDirection, itemsToDisplay) => {
  const list = [...displayList];
  const columnList = [...columns];

  if (direction === 'asc') {
    list.sort((a, b) => {
      const dateA = new Date(a.startsAt);
      const dateB = new Date(b.startsAt);

      return dateA - dateB;
    });

    columnList[columnList.map((e) => e.label).indexOf('Start Date')].direction = invertDirection.asc;
  }

  if (direction === 'desc') {
    list.sort((a, b) => {
      const dateA = new Date(a.startsAt);
      const dateB = new Date(b.startsAt);

      return dateB - dateA;
    });

    columnList[columnList.map((e) => e.label).indexOf('Start Date')].direction = invertDirection.desc;
  }

  itemsToDisplay(list);
};

export function sortColumn(sortColumn, sortFn, column, displayList, itemsToDisplay, columns, invertDirection) {
  return (
    <>
      {(column.sort === sortColumn && column.direction === 'asc')
      && (
        <BiDownArrow onClick={() => sortFn('asc',
          displayList, columns, invertDirection, itemsToDisplay)}
        />
      )}
      {(column.sort === sortColumn && column.direction === 'desc')
      && (
        <BiUpArrow onClick={() => sortFn('desc',
          displayList, columns, invertDirection, itemsToDisplay)}
        />
      )}
    </>
  );
}
