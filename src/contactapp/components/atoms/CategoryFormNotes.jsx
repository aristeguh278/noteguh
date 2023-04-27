import { Center, SegmentedControl, Box } from "@mantine/core";
import { IconEye, IconCode, IconExternalLink, IconPho } from "@tabler/icons-react";
import { CheckupList, PhonePlus } from "tabler-icons-react";

const CategoryFormNotes = () => {
  return (
    <div
      style={{
        margin: "10px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <div>Category</div>
      <SegmentedControl
        data={[
          {
            value: "preview",
            label: (
              <Center>
                <CheckupList size="1rem" />
                <Box ml={10}>List</Box>
              </Center>
            ),
          },
          {
            value: "code",
            label: (
              <Center>
                <IconCode size="1rem" />
                <Box ml={10}>Code</Box>
              </Center>
            ),
          },
          {
            value: "export",
            label: (
              <Center>
                <PhonePlus size="1rem" />
                <Box ml={10}>Contact</Box>
              </Center>
            ),
          },
        ]}
      />
    </div>
  );
};

export default CategoryFormNotes;
