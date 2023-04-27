import React, { useState } from "react";
import { Card, Text, Badge, Group, Modal, Button } from "@mantine/core";
import DeleteButton from "../atoms/DeleteButton";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconAddressBook } from "@tabler/icons-react";
import ArchiveButton from "../atoms/ArchiveButton";
import NotesButton from "../atoms/NotesButton";
const CardNotes = ({
  createdAt,
  title,
  body,
  showFormattedDate,
  limitChar,
  onDelete,
  id,
  showNote,
  onArchive,
}) => {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const deleteAndClose = (id) => {
    onDelete(id);
    notifications.show({
      title: "Delete Success",
      message: "You have succed delete your data 🤥",
      icon: <IconCheck />,
      color: "green",
    });
    setSlowTransitionOpened(false);
  };

  const onArchiveAndDelete = (id) => {
    onArchive(id);
    notifications.show({
      title: "Archive Success",
      message: "You have succed make archive your data 🤥",
      icon: <IconCheck />,
      color: "green",
    });
  };

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Delete Your Note"
        transitionProps={{ transition: "rotate-left" }}
        centered>
        Are you sure you want to delete <strong>{title}</strong> note ? This action will permanently
        delete your note!
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="default">Cancel</Button>
          &nbsp;
          <Button color="red" id={id} onClick={() => deleteAndClose(id)}>
            delete
          </Button>
        </div>
      </Modal>
      <Card.Section style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        {showFormattedDate(createdAt)}
      </Card.Section>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {limitChar(body, 60)}
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "0.7rem",
            flexWrap: "wrap",
            gap: "10px",
          }}>
          <DeleteButton onDelete={onDelete} setSlowTransitionOpened={setSlowTransitionOpened} />
          {showNote === undefined ? (
            <ArchiveButton id={id} onDelete={onDelete} onArchive={onArchiveAndDelete} />
          ) : (
            <NotesButton id={id} onDelete={onDelete} onArchive={onArchive} />
          )}
        </div>
      </Card>
    </>
  );
};

export default CardNotes;
