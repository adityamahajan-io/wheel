import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => (
  <Alert
    isOpen
    message="Are you sure you want to continue? This cannot be undone."
    title="Delete Contact"
    onClose={onClose}
    onSubmit={() => {
      Toastr.success("Contact deleted successfully.");
      onClose();
    }}
  />
);

export default DeleteAlert;
