import React from "react";

import { Table as NeetoTable } from "neetoui";

import { CONTACTS_LIST, contactsTableColumnData } from "../constants";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoTable
    allowRowClick
    pagination
    columnData={contactsTableColumnData(setShowDeleteAlert)}
    currentPageNumber={1}
    defaultPageSize={10}
    handlePageChange={() => {}}
    rowData={CONTACTS_LIST}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
