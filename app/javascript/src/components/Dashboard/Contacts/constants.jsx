import React from "react";

import ProfilePic from "images/ProfilePic";
import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";
import * as yup from "yup";

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

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  role: null,
  email: "",
};

export const ROLES = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Super Admin",
    value: "superAdmin",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: 1,
  },
  {
    label: "Onboarding",
    value: 2,
  },
  {
    label: "User Flow",
    value: 3,
  },
  {
    label: "UX",
    value: 4,
  },
  {
    label: "Bugs",
    value: 5,
  },
  {
    label: "v2",
    value: 6,
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().trim().required("Frist name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(tag => tag.label)),
      value: yup.string().oneOf(ROLES.map(tag => tag.value)),
    })
    .required("Role is required"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Email format incorrect"),
});

export const CONTACTS_LIST = [
  {
    name: "Aditya Mahajan",
    email: "adityamahajan.tech@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Developer",
    id: 1,
  },
  {
    name: "Ronald Richards",
    email: "ronalrichards@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Admin",
    id: 2,
  },
  {
    name: "Sam Smith",
    email: "samsmith@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Fictional",
    id: 3,
  },
  {
    name: "Aditya Mahajan",
    email: "adityamahajan.tech@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Developer",
    id: 4,
  },
  {
    name: "Ronald Richards",
    email: "ronalrichards@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Admin",
    id: 5,
  },
  {
    name: "Sam Smith",
    email: "samsmith@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Fictional",
    id: 6,
  },
];
