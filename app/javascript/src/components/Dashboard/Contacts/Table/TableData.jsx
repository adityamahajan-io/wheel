import React from "react";

import ProfilePic from "images/ProfilePic";
import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

export const contactsTableColumnData = setShowDeleteAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, contact) => (
      <div className="align-items-center flex">
        <Avatar
          size="large"
          user={{
            name: contact.name,
            imageUrl: ProfilePic,
          }}
        />
        <div className="ml-2">
          <Typography style="h4">{name}</Typography>
          <Typography className="neeto-ui-text-gray-500" style="body2">
            {contact.role}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: () => (
      <Dropdown
        buttonStyle="text"
        icon={MenuHorizontal}
        position="bottom-start"
      >
        <li className="m-2">Edit</li>
        <li className="m-2" onClick={() => setShowDeleteAlert(true)}>
          Delete
        </li>
      </Dropdown>
    ),
  },
];
