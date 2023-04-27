import React from "react";
import { ActionIcon } from "@mantine/core";

import { Trash } from "tabler-icons-react";

const DeleteButton = ({ setSlowTransitionOpened }) => {
  return (
    <ActionIcon
      size="lg"
      sx={{
        "&[data-disabled]": { opacity: 0.4 },
        "&[data-loading]": { backgroundColor: "red" },
      }}
      onClick={() => setSlowTransitionOpened(true)}
      color="red"
      variant="light">
      <Trash size="1.4rem" strokeWidth={2} color="red" />
    </ActionIcon>
  );
};

export default DeleteButton;
