import React from "react";

import dayjs from "dayjs";
import ProfilePic from "images/ProfilePic.png";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui";

const Note = ({ note, setSelectedNoteId, setShowDeleteAlert }) => (
  <div className="neeto-ui-border-gray-300 mb-4 w-full border p-4 shadow-md">
    <div className="flex justify-between align-middle">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit</li>
        <li
          onClick={() => {
            setSelectedNoteId(note.id);
            setShowDeleteAlert(true);
          }}
        >
          Delete
        </li>
      </Dropdown>
    </div>
    <div className="mb-2">
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
    </div>
    <hr />
    <div className=" mt-3 flex justify-between align-middle">
      <Tag className="bg-gray-100" label="Getting Started" size="small" />
      <div className="flex items-center space-x-2">
        <Clock size={18} />
        <Tooltip
          content={dayjs(note.created_at).format("dddd, hh:mmA")}
          position="bottom"
        >
          <Typography style="body3">Created 2 Hours Ago</Typography>
        </Tooltip>
        <Avatar
          size="medium"
          user={{
            name: "Oliver Smith",
            imageUrl: ProfilePic,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
