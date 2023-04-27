import React from "react";
import { Archive } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
const ArchiveButton = ({ id, onDelete, onArchive }) => {
  const handleArchive = (id) => {
    onDelete(id);
    onArchive(id);
    console.log("Archive");
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
      <Archive size="1.4rem" strokeWidth={1.5} color={"green"} onClick={() => handleArchive(id)} />
    </ActionIcon>
  );
};

export default ArchiveButton;
