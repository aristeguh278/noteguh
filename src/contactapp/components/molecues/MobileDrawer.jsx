import React from "react";
import {
  createStyles,
  UnstyledButton,
  Divider,
  Button,
  Center,
  Box,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../../images/logo.svg";

const MobileDrawer = ({
  drawerOpened,
  closeDrawer,
  isNotes,
  onChangeNoteArchive,
  showNote,
  toggleLinks,
  links,
  linksOpened,
}) => {
  const useStyles = createStyles((theme) => ({
    archive: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      color: showNote ? "black" : "white",
      backgroundColor: showNote ? "white" : "blue",
      fontWeight: 500,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,

      [theme.fn.smallerThan("sm")]: {
        height: rem(42),
        display: "flex",
        alignItems: "center",
        width: "100%",
      },

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
    link: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: "none",
      color: showNote ? "white" : "black",
      backgroundColor: showNote ? "blue" : "white",
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,

      [theme.fn.smallerThan("sm")]: {
        height: rem(42),
        display: "flex",
        alignItems: "center",
        width: "100%",
      },
    },

    subLink: {
      width: "100%",
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      }),

      "&:active": theme.activeStyles,
    },

    dropdownFooter: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },

    hiddenMobile: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    hiddenDesktop: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  }));
  const { classes, theme } = useStyles();
  const handleClick = (change) => {
    console.log("hallo");
    onChangeNoteArchive(change);
    closeDrawer();
  };
  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title={
        <>
          <img src={Logo} />
        </>
      }
      className={classes.hiddenDesktop}
      zIndex={1000000}>
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

        <a href="#" className={classes.link} onClick={() => handleClick(true)}>
          MyNote
        </a>

        <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
        <a href="#" className={classes.archive} onClick={() => handleClick(false)}>
          My Archive
        </a>
      </ScrollArea>
    </Drawer>
  );
};

export default MobileDrawer;
