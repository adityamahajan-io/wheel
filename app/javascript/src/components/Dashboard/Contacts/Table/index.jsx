/* eslint-disable */
import React from "react";
import { Table as NeetoTable } from "neetoui";
import { CONTACTS_LIST } from "../constants";
import { contactsTableColumnData } from "./TableData";

const Table = ({ setShowDeleteAlert }) => {
  return (
    <NeetoTable
      columnData={contactsTableColumnData(setShowDeleteAlert)}
      currentPageNumber={1}
      defaultPageSize={10}
      handlePageChange={function noRefCheck() {}}
      onRowClick={function noRefCheck() {}}
      onRowSelect={function noRefCheck() {}}
      rowData={CONTACTS_LIST}
      pagination
      allowRowClick
    />
  );
};

export default Table;
