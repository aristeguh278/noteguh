import React from "react";
import { AddressBook, Archive, IconAddressBook } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconChecklist } from "@tabler/icons-react";

const NotesButton = ({ id, onArchive, onDelete }) => {
  const handleNotes = () => {
    onDelete(id);
    onArchive(id);
    notifications.show({
      title: "Activate Note",
      message: "You have succed make archive to active Note 🤥",
      icon: <IconChecklist />,
      color: "green",
    });
  };
  return (
    <ActionIcon
      size="lg"
      sx={{
        "&[data-disabled]": { opacity: 0.4 },
        "&[data-loading]": { backgroundColor: "red" },
      }}
      color="green"
      variant="light">
      <AddressBook size="1.4rem" strokeWidth={1.5} color={"blue"} onClick={handleNotes} />
    </ActionIcon>
  );
};

export default NotesButton;
