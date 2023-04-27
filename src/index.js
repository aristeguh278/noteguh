import React from "react";
import { createRoot } from "react-dom/client";
import Noteguh from "./contactapp/Noteguh";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
const root = createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
      },
    }}>
    <Notifications />
    <Noteguh />
  </MantineProvider>
);
