import React from "react";
import { createRoot } from "react-dom/client";
import Noteguh from "./contactapp/Noteguh";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import App from "./contactapp/App";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
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
      <App />
    </MantineProvider>
  </BrowserRouter>
);
