import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";
import { IconBrandTwitter, IconAlertCircle } from "@tabler/icons-react";

import FormNoteInput from "./FormNoteInput";

const SubHeaderNoteguh = ({ onSearch, onSubmit }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Form Input" size="lg" centered>
        <FormNoteInput onSubmit={onSubmit} />
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          marginTop: -30,
        }}>
        <Button onClick={open}>Add Notes</Button>

        <Input
          icon={<IconBrandTwitter size="1rem" />}
          onChange={onSearch}
          placeholder="Search Note"
          rightSection={
            <div>
              <IconAlertCircle size="1rem" style={{ display: "block", opacity: 0.5 }} />
            </div>
          }
        />
      </div>
    </>
  );
};

export default SubHeaderNoteguh;
