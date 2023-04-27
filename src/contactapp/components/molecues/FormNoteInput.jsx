import React, { Component } from "react";
import { PencilMinus } from "tabler-icons-react";
import { Input, Button, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconChecklist } from "@tabler/icons-react";
// import CategoryFormNotes from "../atoms/CategoryFormNotes";
// import BodyNotes from "./BodyNotes";

class FormNoteInput extends Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      errorTitle: false,
      errorBody: false,
      errorMsg: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.title.length < 2) {
      this.setState({ errorTitle: true });
      this.setState({ errorMsg: "* Judul Minimal 3 karakter" });
    } else {
      this.setState({ errorTitle: false });
      this.setState({ errorMsg: "" });
    }
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    if (this.state.body.length < 9) {
      this.setState({ errorBody: true });
      this.setState({ errorMsg: "*Body/konten Minimal10 karakter" });
    } else {
      this.setState({ errorBody: false });
      this.setState({ errorMsg: "" });
    }
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    notifications.show({
      title: "Add Note Success",
      message: "You have succed Add Note  🤥",
      icon: <IconChecklist />,
      color: "green",
    });
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          icon={<PencilMinus />}
          variant="unstyled"
          placeholder="Add Title"
          error={this.state.errorTitle ? "Minimal 10 karakter" : ""}
        />
        <Textarea
          value={this.state.body}
          variant="unstyled"
          onChange={this.onBodyChangeEventHandler}
          placeholder="Add Body Note"
          style={{ fontSize: "40px" }}
        />
        <span style={{ fontSize: 12, color: "red" }}>{this.state.errorMsg}</span>
        {/* <CategoryFormNotes /> */}
        {/* <BodyNotes value={this.state.body} onChange={this.onBodyChangeEventHandler} /> */}

        <Button
          style={{ width: "100%", marginTop: "1.5rem" }}
          onClick={this.onSubmitEventHandler}
          disabled={this.state.title === "" || this.state.body === "" || this.state.errorMsg}>
          Submit
        </Button>
      </div>
    );
  }
}
export default FormNoteInput;
