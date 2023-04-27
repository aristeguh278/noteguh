import React from "react";
import { Card, Image } from "@mantine/core";
import CreateNote from "../../images/create-note.png";
const Nodata = ({ message }) => {
  return (
    <div style={styles.page}>
      <Card shadow="sm" padding="lg">
        <div>
          {" "}
          <h2 style={{}}> {message}</h2>
        </div>
        <Image src={CreateNote} />
      </Card>
    </div>
  );
};

const styles = {
  page: {
    width: "70%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexGap: 3,
  },
};

export default Nodata;
