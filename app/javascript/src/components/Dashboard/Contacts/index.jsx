import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <MenuBar showMenu={showMenuBar} />
      <Container>
        <Header
          actionBlock={<Button icon="ri-add-line" label="Add Contact" />}
          menuBarToggle={() => setShowMenuBar(show => !show)}
          // eslint-disable-next-line prettier/prettier
          title="All Contacts"
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table setShowDeleteAlert={setShowDeleteAlert} />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
