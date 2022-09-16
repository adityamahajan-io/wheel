import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import CreateNote from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showCreateContactPane, setShowCreateContactPane] = useState(false);

  return (
    <>
      <MenuBar showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(show => !show)}
          title="All Contacts"
          // eslint-disable-next-line prettier/prettier
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowCreateContactPane(open => !open)}
            />
          }
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
      <CreateNote
        setShowCreateContactPane={setShowCreateContactPane}
        showCreateContactPane={showCreateContactPane}
      />
    </>
  );
};

export default Contacts;
