import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";
import Noteguh from "./contactapp/Noteguh";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
const root = createRoot(document.getElementById("root"));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Notifications />
    <Noteguh />
  </MantineProvider>
);
