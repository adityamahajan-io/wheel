import * as yup from "yup";

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
  firstName: yup.string().required("Frist name is required"),
  lastName: yup.string().required("Last name is required"),
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
